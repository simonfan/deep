//     Deep
//     (c) simonfan
//     Deep is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module Deep
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(["lodash", "itr"], function (_, iterator) {
	'use strict';

	/**
	 * Deep may be used as a wrapper.
	 */
	var deep = {};

	/**
	 * Parses a string into multiple keys.
	 * @method keys
	 * @param keyStr
	 */
	deep.parseKeys = function parseKeys(keyStr) {
		return keyStr
			.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2')
			.replace(/^\./, '')
			.split('.');
	};


	/**
	 * Walker object.
	 */
	var deepWalker = iterator.object.extend({
		/**
		 * Parses out the next key to be walked to.
		 *
		 * @method nextStep
		 */
		nextStep: function nextStep() {
			var regexp = new RegExp('^' + this.currentKey() + '\\.');
			return this.nextKey().replace(regexp, '');
		},

		currentStep: function currentStep() {
			var regexp = new RegExp('^' + this.previousKey() + '\\.');
			return this.currentKey().replace(regexp, '');
		},

		previousStep: function previousStep() {
			var pkey = this.previousKey() || '';

			return _.last(pkey.split('.'));
		}
	});

	deep.walker = function walker(scope, keys) {
		keys = _.isArray(keys) ? keys : deep.parseKeys(keys);

			// var to hold values
		var values = {},
			// var to hold path order
			paths = [];

		_.each(keys, function (key, index) {

			// build the path to the current value
			var path = _.first(keys, index).join('.');
			paths.push(path);

			// save
			values[path] = scope;

			// wakk
			scope = scope[key];
		});

		return deepWalker(values, { order: paths });
	};

	/**
	 *
	 * @method get
	 * @param scope
	 * @param keys {Array|String}

	 * @param [depth] {Number}
	 *     Indicates at which depth the walking should be interrupted.
	 */
	deep.get = function get(scope, keys) {
		keys = _.isArray(keys) ? keys : deep.parseKeys(keys);

		return _.reduce(keys, function (result, key, index) {
			return result[key];
		}, scope);
	};

	deep.set = function set(scope, keys, value) {
		keys = _.isArray(keys) ? keys : deep.parseKeys(keys);

		// keep the last key
		var lastKey = keys.pop();

		// get the penultimum object
		scope = deep.get(scope, keys);

		// set
		scope[lastKey] = value;
	};

	return deep;
});
