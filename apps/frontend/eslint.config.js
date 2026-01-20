import { eslint } from '@siberiacancode/eslint';

export default eslint(
  {
    typescript: true,
    react: true,
    jsx: true
  },
  {
    name: 'frontend/rewrite',
    rules: {
      'import/no-named-default': 'error',
      'sort-jsx-props': 'off',
      'siberiacancode-react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'no-restricted-syntax': 'off',
    }
  }
);
