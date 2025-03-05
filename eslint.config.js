import tsParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import globals from "globals";

export default [
    {
        files: ['**/*.{mjs,ts}']
    },
    {
        ignores: ['dist/", "**/node_modules', '**/*.js', 'tests/']
    },
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
            '@typescript-eslint/no-unused-vars': ['error', {
                'args': 'all',
            }],
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            semi: ['error', 'never'],
        },
    },
];