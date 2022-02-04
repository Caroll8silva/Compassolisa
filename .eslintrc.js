module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
    "prettier/prettier": "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "func-names": "off",
    "import/no-extraneous-dependencies": "off",
    "no-console": "off"

  },
};
