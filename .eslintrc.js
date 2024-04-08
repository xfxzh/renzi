module.exports = {
	root: true,
	env: {
		node: true
	},
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    'plugin:prettier/recommended'
  ],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		 //在rules中添加自定义规则
		 //关闭组件命名规则
		 "vue/multi-word-component-names":"off",
		 "no-undef": "off",//不能有未定义的变量
		 "no-extra-semi": "off",//禁止多余的冒号
		 "no-unreachable": "off",//不能有无法执行的代码
		 "no-irregular-whitespace": "off",//不能有不规则的空格

	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
