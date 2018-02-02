const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const { join } = require('path')

const paths = {
  root: join(__dirname),
  src: join(__dirname, 'src'),
  dist: join(__dirname, 'dist')
}

module.exports = {
  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: 'main.js',
    libraryTarget: 'umd'
  },

  plugins: [
    new CleanPlugin(['dist'], {
      root: paths.root
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.src,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'stage-0', 'react'],
            plugins: [
              ['transform-runtime', {
                helpers: false,
                polyfill: false,
                regenerator: true
              }]
            ]
          }
        }]
      }
    ]
  },

  resolve: {
    alias: {
      src: paths.src
    }
  }
}
