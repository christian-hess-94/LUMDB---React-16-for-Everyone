module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended' ],
	parser: 'babel-eslint',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [ 'react', 'import' ],
	rules: {
		//indent: ['warn', 'tab'],
		'jsx-quotes': [ 'warn', 'prefer-single' ],
		quotes: [ 'warn', 'single' ],
		// 'react/prop-types': 0,
		'no-mixed-spaces-and-tabs': 0,
		'import/no-named-default': 'error',
		'import/no-anonymous-default-export': 'error',
		'no-unused-vars': [ 'error', { argsIgnorePattern: '_' } ],
	},
}
