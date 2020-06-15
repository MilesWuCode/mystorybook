# MyStoryBook

## Install

- npx -p @storybook/cli sb init --type vue
- npm install vue --save
- npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev
- npm i @storybook/storybook-deployer --save-dev

## depoly github page

```json
  "scripts": {
    // ...
    "deploy-storybook": "storybook-to-ghpages"
  },
```
