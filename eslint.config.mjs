import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  // tseslint.configs.strict,
  // tseslint.configs.recommendedTypeChecked,
  // tseslint.configs.strictTypeChecked,
  // tseslint.configs.stylisticTypeChecked,
  globalIgnores(['./*.js', './*.cjs', './*.mjs', 'docs', 'dist', 'dev-dist', 'node_modules']),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
