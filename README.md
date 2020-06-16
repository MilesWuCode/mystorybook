# MyStoryBook

## Install

- install package

  ```sh
  npx -p @storybook/cli sb init --type vue
  npm install vue --save
  npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev
  npm i @storybook/storybook-deployer --save-dev
  ```

## Depoly to Github Page

- package.json

  ```json
    "scripts": {
      // ...
      "deploy-storybook": "storybook-to-ghpages"
    },
  ```

- <https://mileswucode.github.io/mystorybook>

## Add Tailwind CSS

- install package

  ```sh
  npm i tailwindcss postcss-cli autoprefixer --save-dev
  npm i css-loader sass sass-loader style-loader --save-dev
  ```

- edit .storybook/main.js

```js
const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = {
  // ...
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  }
};
```

- create postcss.config.js

  ```js
  module.exports = {
    plugins: [require("tailwindcss"), require("autoprefixer")]
  };
  ```

- create tailwind.config.js

  ```js
  // tailwind.config.js
  module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {},
    variants: {},
    plugins: []
  };
  ```

- create src/css/tailwind.css

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- edit your.stories.js

  ```js
  import "../src/css/tailwind.css";
  ```
