# MyStoryBook

## Install

- install package

  ```sh
  npx -p @storybook/cli sb init --type vue
  npm install vue --save
  npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev
  npm i @storybook/storybook-deployer --save-dev
  ```

## depoly github page

- package.json

  ```json
    "scripts": {
      ...
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
