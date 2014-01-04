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

define(["lodash"], function (_) {
	'use strict';

	/**
	 * Deep may be used as a wrapper.
	 */
	var deep = {};

	/**
	 * inspired by and copied from
	 * https://github.com/UmbraEngineering/json-file/blob/master/lib/index.js
	 * Thank you (;
	 *
	 * @method resolve
	 * @private
	 */
	function resolve(scope, keys, callback) {

		keys = keys.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.');

        // keep the last key from being walked
        var finalKey = keys.pop();

        // loop through keys
        _.each(keys, function(key) {
        	// walk
            scope = scope[key];
        });

        // run the callback
        return callback(scope, finalKey);
	};

	/**
	 * Mixin methods:
	 */
	deep.get = function get(obj, key) {
		return resolve(obj, key, function (scope, finalKey) {
			return scope[finalKey];
		});
	};

	deep.set = function set(obj, key, value) {
		resolve(obj, key, function (scope, finalKey) {
			scope[finalKey] = value;
		});
	};

	return deep;
});
