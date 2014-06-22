#!/usr/bin/env node
'use strict';
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');


//node cli.js --help
if (argv.help) {
	console.log([
		pkg.description,
		'',
		'Example',
		'  $ node-version',
		'  v0.10.28'
	].join('\n'));

}



//node cli.js --version

if (argv.version) {
	console.log(pkg.version);
	return;
}




//node cli.js --node
if (argv.node) {
		var nodeVersion = require('./node.js');
		nodeVersion(function (err, version) {
			if (err) {
				console.error(err.message);
				process.exit(1);
			}

			console.log(version);
		});
};



//node cli.js --osx
if (argv.osx) {
		var osxVersion = require('./osx.js');
		osxVersion(function (err, version) {
			if (err) {
				console.error(err.message);
				process.exit(1);
			}

			console.log(version);
		});
};
