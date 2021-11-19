module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'prettier'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    // ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
