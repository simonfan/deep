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

define(function (require, exports, module) {
	'use strict';

	var _ = require('lodash');

	/**
	 * Deep may be used as a wrapper.
	 */
	var deep = {};

	/**
	 * Parses a string into multiple keys.
	 * @method keys
	 * @param keyStr
	 */
	deep.parseKeys = require('./__deep__/keys');

	/**
	 * Walker
	 */
	deep.walker = require('./__deep__/walker');

	/**
	 * Get and set
	 */
	_.extend(deep, require('./__deep__/getset'));

	return deep;
});
