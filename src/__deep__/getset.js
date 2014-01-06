/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(function (require, exports, module) {
	'use strict';

	var _ = require('lodash'),
		parseKeys = require('./keys');


	/**
	 *
	 * @method get
	 * @param scope
	 * @param keys {Array|String}

	 * @param [depth] {Number}
	 *     Indicates at which depth the walking should be interrupted.
	 */
	exports.get = function get(scope, keys) {
		keys = _.isArray(keys) ? keys : parseKeys(keys);

		return _.reduce(keys, function (result, key, index) {
			return result[key];
		}, scope);
	};

	exports.set = function set(scope, keys, value) {
		keys = _.isArray(keys) ? keys : parseKeys(keys);

		// keep the last key
		var lastKey = keys.pop();

		// get the penultimum object
		scope = exports.get(scope, keys);

		// set
		scope[lastKey] = value;
	};
});
