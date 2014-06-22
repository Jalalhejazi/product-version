'use strict';
var assert = require('assert');

it('should return the current node version', function (cb) {
	require('./node.js')(function (err, version) {
		console.log('NODE:', version);
		assert(!err, err);
		assert(version.length > 0);
		cb();
	});
});




it('should return the current OSX version', function (cb) {
	require('./osx.js')(function (err, version) {
		console.log('OSX:', version);
		assert(!err, err);
		assert(version.length > 0);
		cb();
	});
});
