// https://docs.expo.dev/guides/using-eslint/

module.exports = {
  root: true,
  extends: ['expo', 'eslint:recommended'],
  plugins: ['import', 'react-native', 'prettier', '@tanstack/query'],
  rules: {
    'no-console': 'error',
    'no-empty': ['error', {allowEmptyCatch: true}],
    'import/no-unresolved': 'error',
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/named': 'error',
    'import/no-duplicates': 'error',
    '@tanstack/query/exhaustive-deps': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native|expo)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@(atoms|molecules|organisms|screens)/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-return-await': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
    'no-duplicate-imports': 'error',
    'array-callback-return': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: [
    '*.test.js',
    '*.test.ts',
    '*.test.tsx',
    '**/__tests__/**',
    '**/tests/**',
  ],
};
