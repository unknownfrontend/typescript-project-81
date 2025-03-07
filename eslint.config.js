import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: ['dist/', '__tests__/', 'coverage/'],
  },
  {
    files: [
      'src/**/*.{js,ts}',
    ],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['src/*.js', 'src/*.ts'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
