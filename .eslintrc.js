module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true,
        'vue/setup-compiler-macros': true,
    },
    globals: {
        defineOptions: false, // false: 变量只读，true: 变量支持读写
    },
    parser: 'vue-eslint-parser', // 定义ESLint的解析器
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-redeclare': 'off',
        'no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                useTabs: false,
            },
            {
                usePrettierrc: true,
            },
        ],

        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',

        'vue/multi-word-component-names': 'off',
        'vue/no-v-for-template-key-on-child': 'off',
        'vue/prefer-import-from-vue': 'off',
    },
};
