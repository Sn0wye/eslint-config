module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:prettier/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: "avoid",
        endOfLine: "auto",
        bracketSpacing: true,
        printWidth: 80,
        trailingComma: "none",
        quoteProps: "preserve",
      },
    ],
    "space-before-function-paren": "off",
    camelcase: "warn",
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
