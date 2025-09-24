const js = require('@eslint/js')
const globals = require('globals')
const prettier = require('eslint-plugin-prettier')
const security = require('eslint-plugin-security')
const promise = require('eslint-plugin-promise')
const { defineConfig, globalIgnores } = require('eslint/config')

module.exports = defineConfig([
  globalIgnores(['node_modules', 'dist']),
  {
    files: ['**/*.{js}'],
    plugins: { prettier, security, promise },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.node },
      parserOptions: { sourceType: 'module' },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...security.configs.recommended.rules,
      ...promise.configs.recommended.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: 'error',
      curly: 'error',
      'prefer-const': 'error',
      'prettier/prettier': 'error',
    },
  },
])
