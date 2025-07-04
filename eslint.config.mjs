import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
const compat = new FlatCompat({
  baseDirectory: process.cwd(),
})

export default [
  // 기존 config 파일에서 변환
  ...compat.extends([
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ]),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]
