// @ts-check

/** @type {import("eslint")} */
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 2016,
      sourceType: 'module',
      globals: { __dirname: true }
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      camelase: 'off',
      'space-before-function-paren': ['error', { named: 'never' }],
      // Add more ESLint rules here as needed
      //'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      'no-unused-vars': 'error', // Conflicts with @typescript-eslint/no-unused-vars
      'no-empty-function': 'error' // Conflicts with @typescript-eslint/no-empty-function
    }
  },
  {
    ignores: ['node_modules/', 'dist/']
  }
)
