/* eslint-env node */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // React specific rules
    'react/prop-types': 'off',

    // React Hooks specific rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // General ESLint rules
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-var': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
