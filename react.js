module.exports = {
  "extends": "airbnb",
  "rules": {
    "no-multi-spaces": 0,
    "no-underscore-dangle": [0],
    "consistent-return": 0,
    "no-unused-expressions": [2, { "allowShortCircuit": true }],
    "no-param-reassign": 0,
    "func-names": 0,
    "space-before-function-paren": [2, "never"],
    "no-shadow": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 5 }],
    "space-in-parens": 0,
    "key-spacing": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "padded-blocks": 0,
    "no-console": 1,
    "no-continue": 0,
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "no-mixed-operators": 0,
    "global-require": 0,
    "react/jsx-filename-extension": 0,
    "comma-dangle": ["error", "only-multiline"],
    "arrow-body-style": ["warn","as-needed"],
    "max-len": [2, 220, 2],
    "no-debugger": "warn",
    "strict": [0, "global"]
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "globals"   : {
    /* jest */
    "describe"   : false,
    "it"         : false,
    "before"     : false,
    "beforeEach" : false,
    "after"      : false,
    "afterEach"  : false,
    "expect"     : false,
    "document"   : false
  }
}