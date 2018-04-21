module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  "rules": {
    "indent": [
      "error", 2
    ],
    "quotes": [
      "error", "single"
    ],
    "semi": ["error", "never"],
    "no-console": 0
  }
}
