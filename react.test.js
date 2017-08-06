module.exports = {
  "extends": "./react",
  "rules": {
    "no-unused-expressions": 0, // for `chai.expect`
    "max-len": [2, 100, 2, {ignorePattern: "^\\s*(?:it|describe)\\(.*"}],
    "max-statements": 0,
    "max-nested-callbacks": 0,
    "no-multi-spaces": 0,
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