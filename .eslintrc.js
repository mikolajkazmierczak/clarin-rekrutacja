module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:import/recommended",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    $nuxt: true,
    $debug: true,
  },
  plugins: [
    "vue",
  ],
  rules: {
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    "function-paren-newline": 0,
    "implicit-arrow-linebreak": 0,
    "comma-dangle": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "linebreak-style": 0,
    "no-dynamic-require": 0,
    "import/no-dynamic-require": 0,
    "no-console": 0,
    "global-require": 0,
    "no-plusplus": 0,
  },
  overrides: [
    {
      files: ["layouts/*.vue", "pages/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
};
