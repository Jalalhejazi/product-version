'use strict';
var assert = require('assert');

it('should return the current node version', function (cb) {
	require('./product_version/node.js')(function (err, version) {
		console.log('NODE:', version);
		assert(!err, err);
		assert(version.length > 0);
		cb();
	});
});




it('should return the current OSX version', function (cb) {
	require('./product_version/osx.js')(function (err, version) {
		console.log('OSX:', version);
		assert(!err, err);
		assert(version.length > 0);
		cb();
	});
});
