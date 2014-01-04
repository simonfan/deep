require.config({
	urlArgs: 'bust=0.961799998767674',
	baseUrl: '/',
	paths: {
		requirejs: 'bower_components/requirejs/require',
		text: 'bower_components/requirejs-text/text',
		mocha: 'node_modules/mocha/mocha',
		should: 'node_modules/should/should',
		deep: 'src/deep',
		jquery: 'bower_components/jquery/jquery',
		lodash: 'bower_components/lodash/dist/lodash.compat',
		'requirejs-text': 'bower_components/requirejs-text/text',
		subject: 'bower_components/subject/src/subject',
		underscore: 'bower_components/underscore/underscore',
		itr: 'bower_components/itr/built/iterator'
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
