import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import security from 'eslint-plugin-security'
import promise from 'eslint-plugin-promise'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['node_modules', 'dist']),
  {
    files: ['**/*.{js}'],
    plugins: {
      // Formatter
      prettier,
      // Security best practices
      security,
      // Promise best practices
      promise,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
    rules: {
      // Eslint recommended rules
      ...js.configs.recommended.rules,
      // Plugin recommended rules
      ...security.configs.recommended.rules,
      ...promise.configs.recommended.rules,

      // Custom rules
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off', // Permitir console.log
      eqeqeq: 'error',
      curly: 'error',
      'prefer-const': 'error',

      // Prettier como validador de formato
      'prettier/prettier': 'error',
    },
  },
])
