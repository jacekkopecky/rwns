import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.strict,
  // tseslint.configs.recommendedTypeChecked,
  // tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    ignores: [
      './*.js',
      './*.cjs',
      './*.mjs',
      'docs',
      'dist',
      'dev-dist',
      'node_modules',
      './src/testing',
    ],
  },
  {
    rules: {
      // often we know well enough that something is there
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
);
