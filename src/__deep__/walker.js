/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(function (require, exports, module) {
	'use strict';

	var _ = require('lodash'),
		iterator = require('itr'),
		parseKeys = require('./keys');

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
		},


		/**
		 * Returns a string
		 *
		 * @method remainingSteps
		 */
		remainingSteps: function remainingSteps() {
			var re = new RegExp('^' + this.currentKey() + '\\.');
			return this.destination().replace(re, '');
		},

		destination: function destination() {
			return _.last(this.order);
		}
	});

	/**
	 * The exports
	 */
	var walker = module.exports = function walker(scope, keys) {
		keys = _.isArray(keys) ? keys : parseKeys(keys);

			// var to hold values
		var values = {
				'': scope
			},
			// var to hold path order
			paths = [''];

		/**
		 * Use every so that the loop is breakable.
		 */
		_.every(keys, function (key, index) {

			// build the path to the current value
			var path = _.first(keys, index + 1).join('.');
			paths.push(path);

			// walk
			scope = scope[key];

			// save
			values[path] = scope;

			// if the value is undefined, the loop shall be stopped.
			return !_.isUndefined(scope);
		});

		return deepWalker(values, { order: paths });
	};
});
