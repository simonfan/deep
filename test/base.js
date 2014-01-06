(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src' :
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

		describe('walker = deep.walker(obj {Object}, pathToProperty {String})', function () {
			beforeEach(function () {

				this.path = 'a.b.c.d.0';
				this.walker = deep.walker(this.obj, this.path);

				this.keys = this.path.split('.');
			});

			it('has a next method that walks through values', function () {
				var walker = this.walker;

				walker.next.should.be.type('function');

				walker.next().should.equal(this.obj);

				walker.next().should.equal(this.obj[this.keys[0]]);

				walker.next().should.equal(this.obj[this.keys[0]][this.keys[1]])
			});

			it('has a nextKey method', function () {
				var walker = this.walker;

				walker.nextKey().should.equal('');

				walker.next();
				walker.nextKey().should.equal('a');

				walker.next();
				walker.nextKey().should.equal('a.b');
			});

			it('nextStep returns the next key to be walked to', function () {
				var walker = this.walker;

				walker.next();
				walker.nextKey().should.equal('a');
				walker.nextStep().should.equal('a');
				walker.previousStep().should.equal('');

				walker.next();
				walker.nextKey().should.equal('a.b');
				walker.nextStep().should.equal('b');
				walker.previousStep().should.equal('');

				walker.next();
				walker.nextKey().should.equal('a.b.c');
				walker.nextStep().should.equal('c');

				walker.previousStep().should.equal('a');
			});

			it('hasNext() should return false if the Object depth is not enough', function () {
				var obj = {
						a: {
							b: {
								c: {} // no 'd'
							}
						}
					},
					walker = deep.walker(obj, 'a.b.c.d[0]');

				// root exists
				walker.next()
					.should.eql(obj);

				// a exists
				walker.next()
					.should.eql(obj.a);

				// b exists
				walker.next()
					.should.eql(obj.a.b);

				// c exists
				walker.next()
					.should.eql(obj.a.b.c);

				// d was NOT DEFINED, thus it is undefined
				should(walker.next())
					.eql(void(0));

				// here is the real test:
				// d is undefined, thus d[0] CANNOT EXIST
				// d CANNOT have further properties
				walker.hasNext()
					.should.be.false;
			})
		});
	});
});
