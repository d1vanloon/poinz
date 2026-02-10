import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        it: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly',
        beforeEach: 'readonly',
        describe: 'readonly',
        context: 'readonly',
        before: 'readonly',
        after: 'readonly',
        afterEach: 'readonly'
      }
    }
  }
];
