module.exports = function (wallaby) {
	return {
		files: [
			'source/**/*.js',
			'!source/**/*.spec.js'
		],

		tests: [
			'source/**/*.spec.js'
		],

		env: {
			type: 'node'
		},

		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},

		testFramework: 'ava',

		debug: true
	};
};
