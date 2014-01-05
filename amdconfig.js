require.config({
	urlArgs: 'bust=0.7734342608600855',
	baseUrl: '/src',
	paths: {
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		mocha: '../node_modules/mocha/mocha',
		should: '../node_modules/should/should',
		deep: 'index',
		jquery: '../bower_components/jquery/jquery',
		itr: '../bower_components/itr/built/itr',
		qunit: '../bower_components/qunit/qunit/qunit',
		lodash: '../bower_components/lodash/dist/lodash.compat',
		'requirejs-text': '../bower_components/requirejs-text/text',
		subject: '../bower_components/subject/src/subject',
		underscore: '../bower_components/underscore/underscore'
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
