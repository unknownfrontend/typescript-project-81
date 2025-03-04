import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tseslint from 'typescript-eslint';
import globals from "globals";

export default [
    ...tseslint.configs.strict,
    {
        files: ['**/*.{js,mjs,ts}']
    },
    {
        ignores: ['dist/", "**/node_modules', '**/*.js']
    },
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            '@typescript-eslint': tsEslintPlugin,
        },
        rules: {
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            semi: ['error', 'never']
        }
    }
];