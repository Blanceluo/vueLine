module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/airbnb"
    ],
    rules: {
        'no-console': 0,
        'linebreak-style': 'off', // 忽略行尾
        'comma-dangle': [2, 'never'],
        'arrow-body-style': ['error', 'always']
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}