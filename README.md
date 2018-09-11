# react-password-strength

> React component with [zxcvbn](https://github.com/dropbox/zxcvbn)

You can see running example: https://rodrigowp.github.io/react-password-strength/

![](https://github.com/RodrigoWP/react-password-strength/blob/master/example.gif)

### Installation

### for npm users
```console
npm i --save @rodrigowpl/react-password-strength
```

### for yarn users
```console
yarn add @rodrigowpl/react-password-strength
```

## Usage

```jsx
import ReactPasswordStrength from '@rodrigowpl/react-password-strength'

<ReactPasswordStrength
  passwordValue='whatever-password'
/>
```

### Props

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| width | number | 300 | Set width of container element
| passwordValue | string | undefined | Value that will be validate
| strengthColors | object | [STRENGTH_COLOR](https://github.com/RodrigoWP/react-password-strength/blob/master/src/constants.js) | Custom strength colors
| strengthText | object | [STRENGTH_TEXT](https://github.com/RodrigoWP/react-password-strength/blob/master/src/constants.js) | Custom strength texts

## Contributing

### Dependencies:

- Node.js `>=` v8;

### Up and running

- Install dependencies: `yarn` (or `npm i`);
- Run `yarn storybook` (or `npm run storybook`) to storybook on `http://localhost:6006`
- Run `yarn storybook:build` (or `npm run storybook:build`) for docs build (files will be) generated in the `docs` directory)
- Run `yarn build` (or `npm run build`) for production build (files will be generated in the `dist` directory)

### Scripts

- `yarn build (or npm run build)`: Build project to production
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `npm run pub`: Publish to npm

## License

[MIT](https://github.com/RodrigoWP/licenses/blob/master/LICENSE) &copy; Rodrigo Wippel
