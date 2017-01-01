module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
    "semi": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "extends": "airbnb",
  "installedESLint": true,
  "env": {
    "browser": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ]
};