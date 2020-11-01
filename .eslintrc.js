module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/prettier'
	],
	rules: {
		'vue/script-indent': [
			'error',
			'tab',
			{
				baseIndent: 1
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint'
	}
}
