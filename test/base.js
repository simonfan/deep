(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src/deep' :
		// browser
		'deep',
		// dependencies for the test
		deps = [mod, 'should'];

	if (typeof define !== 'function') {
		// node
		factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(deep, should) {
	'use strict';

	describe('deep base', function () {
		beforeEach(function () {
			this.obj = {
				a: {
					b: {
						c: {
							d: ['e', 'f', 'g']
						}
					}
				}
			};
		});

	    it('deep.get(obj {Object}, pathToProperty {String})', function() {
	        //Get deep value
	        deep.get(this.obj, 'a.b.c.d[2]').should.equal('g');
	    });

	    it('deep.set(obj {Object}, pathToProperty {String}, value)', function () {

	        //Set deep value
	        deep.set(this.obj, 'a.b.c.d[2]', 'george');

	        deep.get(this.obj, 'a.b.c.d[2]').should.equal('george');

	    });

	});
});
