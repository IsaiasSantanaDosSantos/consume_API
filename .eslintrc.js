module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

// {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
//   parser: "@babel/eslint-parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     babelOptions: {
//       presets: ["@babel/preset-react"],
//     },
//     ecmaVersion: "latest",
//     requireConfigFile: false,
//     sourceType: "module",
//   },
//   plugins: ["react", "prettier", "react-hooks"],
//   rules: {
//     "prettier/prettier": 2,
//     "react/jsx-filename-extension": 0,
//     "import/prefer-default-export": 0,
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//     "react/react-in-jsx-scope": "off",
//   },
// };
