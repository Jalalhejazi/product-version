
# Product-versions

## CommandLine with node

> Get the OS X version of the current system. Example: `10.9.3`

> Get the NODE version of the current system. Example: `v0.10.28`


## Install npm dependencies

```sh
$ npm install
```


## mocha Test

```js
$ npm test
```


```js
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
```


## CommandLine install -g

```sh
$ npm install --global node-version
```

```sh
$ node-version --help

Example
  $ node-version
  v0.10.28
```

