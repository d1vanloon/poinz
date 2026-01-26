import {defineConfig} from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends('eslint:recommended'),

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2020,
        sourceType: 'module',
    },

    rules: {
        semi: [2, 'always'],
        eqeqeq: 2,
        quotes: [2, 'single'],
        curly: [2, 'all'],
        'prefer-const': 2,
        'no-var': 2,
        'no-use-before-define': 0,
        'no-console': 0,
    },
}, {
    files: ['test/**/*.js'],
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },
    },
}]);
