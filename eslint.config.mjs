// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier/recommended'

export default withNuxt([
  {
    files: ['**/*.ts', '**/*.vue', '*.mjs'],
    ...prettier,
    parserOptions: {
      // Required for certain syntax usages
      ecmaVersion: 2020,
    },
  },
])
