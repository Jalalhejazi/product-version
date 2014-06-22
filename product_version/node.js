'use strict';
var execFile = require('child_process').execFile;




module.exports = function (cb) {
	execFile('node', ['--version'], function (err, stdout) {
		if (err) {
			return cb(err);
		}

		cb(null, stdout.trim());
	});
};
