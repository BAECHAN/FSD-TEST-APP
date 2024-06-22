module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',

    /** feature-sliced */
    '@feature-sliced',
    '@feature-sliced/eslint-config/rules/import-order',
    '@feature-sliced/eslint-config/rules/public-api',
    '@feature-sliced/eslint-config/rules/layers-slices',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Use custom hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // prettier
    'prettier/prettier': 'error',

    // Disallow the use of useEffect
    'react/no-use-effect': 'off', // ESLint doesn't have a built-in rule to disallow useEffect, you need to rely on comments or custom plugins.

    // Use function expressions for components
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],

    // Disallow function constructors
    'no-new-func': 'error',

    // Use const and let only
    'no-var': 'error',

    // Disallow Higher Order Components
    'react/no-hoc': 'off', // ESLint doesn't have a built-in rule to disallow HOCs, you need to rely on comments or custom plugins.

    // Disallow render method in components
    'react/no-render-return-value': 'error',

    // Constants outside of components
    'no-constant-condition': 'error',

    // Common types and constants in separate files
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Use arrow functions without parens for single parameters
    'arrow-parens': ['error', 'as-needed'],

    // Prefer implicit return where possible
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Use template strings
    'prefer-template': 'error',

    // Declare one variable per line
    'one-var': ['error', 'never'],

    // Disallow wildcard imports
    'import/no-unresolved': 'error',

    // Enforce line breaks before cases in switch statements
    'newline-before-return': 'error',

    // Disallow mixins
    'no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: 'With statements are not allowed.',
      },
    ],

    // Avoid enums
    '@typescript-eslint/no-redeclare': 'error',

    // Prefer Type Guards over Type Assertion
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],

    // Ensure Request and Response types are clear in APIs
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Use array and object literals
    'no-array-constructor': 'error',
    'no-new-object': 'error',

    // Use spread operator for array copying
    'prefer-spread': 'error',

    // Enforce trailing commas
    'comma-dangle': ['error', 'always-multiline'],

    // Enforce braces for blocks
    curly: ['error', 'all'],

    // Enforce single property object literals on one line
    'object-curly-newline': ['error', { consistent: true }],

    // Use double quotes in JSX and single quotes in JS
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single'],

    // Use template literals for complex string concatenations
    'template-curly-spacing': ['error', 'never'],

    // Enforce self-closing tags
    'react/self-closing-comp': 'error',

    // Enforce closing tag location for multiline JSX
    'react/jsx-closing-tag-location': 'error',

    // Enforce camelCase for variables and PascalCase for types and components
    camelcase: 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Avoid global variables
    'no-undef': 'error',

    // Avoid key={index}
    'react/no-array-index-key': 'warn',

    // Define defaultProps for non-required props
    'react/require-default-props': 'error',

    // Enforce space inside self-closing tags
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],

    // Disallow spaces inside JSX curly braces
    'react/jsx-curly-spacing': ['error', { when: 'never' }],

    // Enforce spacing in and around parentheses
    'space-in-parens': ['error', 'never'],

    // Enforce spaces after commas
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce spacing between keyword and condition
    'keyword-spacing': ['error', { before: true, after: true }],

    // Enforce spaces around colons in object literals
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce parentheses for multiline JSX
    'react/jsx-wrap-multilines': 'error',

    // Enforce JSDoc comments
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  },
};
