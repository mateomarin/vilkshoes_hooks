module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
          'warn',
          {extensions: ['.jsx', '.js']}
      ],
      'no-param-reassign': 'off',
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': [2, {"allow": ["_id"]}],
      'no-console': ['error', {allow: 'tron'}],
      'react-hooks/rules-of-hooks':  'error',
      'react-hooks/exhaustive-deps': 'warn'
  },
};
