module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'type',
          ['parent', 'sibling'],
          'index',
          'object',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/types/**',
            group: 'type',
            position: 'before',
          },
          {
            pattern: '@/styles/**',
            group: 'object',
            position: 'after',
          },
        ],
      },
    ],
  },
};
