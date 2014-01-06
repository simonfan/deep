/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(function (require, exports, module) {
	/**
	 * Parses a string into multiple keys.
	 * @method keys
	 * @param keyStr
	 */
	return function parseKeys(keyStr) {
		return keyStr
			.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2')
			.replace(/^\./, '')
			.split('.');
	};
});
