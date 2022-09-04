# Sn0wye ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

with npm
```
npm i eslint @sn0wye/eslint-config -D
```

with yarn
```
yarn add eslint @sn0wye/eslint-config -D
```

2. Create a `.eslintrc.json` or file extending the config:
```
{
  "extends": "@sn0wye/eslint-config/react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.