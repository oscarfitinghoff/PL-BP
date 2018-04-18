module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: 'standard',
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ]
  }
};
