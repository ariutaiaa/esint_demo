module.exports = {
    root:true,
    env:  {
        "node": true
    },
    "extends": [
        "plugin:vue/recommended",
        "eslint:recommended"
    ],
    "rules": {
        'no-console':process.env.NOOE_ENV==='production'?'error':'off',
        'no-debugger':process.env.NOOE_ENV==='production'?'error':'off',
        "quotes": ["error", "double"],
        // "no-unused-vars": ["off"]
        // "quotes":["off"]
    },
    parserOptions: {
        parser:'babel-eslint'
    },
};
