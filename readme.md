
# Product-versions

## use the commandLine with node

> Get the OS X version of the current system. Example: `10.9.3`

> Get the NODE version of the current system. Example: `v0.10.28`


## Install npm dependencies

```sh
$ npm install
```


## mocha Test

```js
$ npm test
or just type mocha anywhere
$ mocha
```


```js
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
```


## CommandLine install --global

```sh
$ npm install -g product-version
```

### just use the command: product-version 
```sh
$ product-version --help

Example
  $ product-version
  v0.10.28
```

