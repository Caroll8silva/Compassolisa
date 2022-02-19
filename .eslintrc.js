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
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-console": "off" 

  },
};
