const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
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

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules\/(react(-dom)?|fbjs)\//.test(resource) ||
        /node_modules\/preact(-compat)?\//.test(resource)
      )
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules/.test(resource)
      )
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
