import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import sortImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/*.config.js',
      '**/*.json',
      '**/.storybook/*',
      'jest.setup.js',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ),
  {
    settings: {
        react: {
          version: 'detect',
        },
      },
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      prettier,
      import: sortImport,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
        'react/jsx-uses-react': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-native/sort-styles': 'off',
        'react-native/no-raw-text': 'off',
        'react/prop-types': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-empty-object-type': 0,
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-explicit-any': 0,
    },
  },
];
