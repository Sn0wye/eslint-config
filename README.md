# Sn0wye ESLint config

## Whats included?

- React plugin;
- React Hooks plugin;
- JSX a11y plugin;

## Setup

1. Install the dependencies

```
pnpm i eslint @sn0wye/eslint-config -D
```

2. Create a `.eslintrc.json` or file extending the config:
```ts
const path = require('path');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@sn0wye/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
};
```

3. Add the linting scripts

```json
// package.json
"scripts": {
  // ...,
  "lint": "eslint src --ext ts,tsx",
  "lint:fix": "eslint src --ext ts,tsx --fix",
}
```