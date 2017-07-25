inject-then [![Build Status](https://travis-ci.org/bendrucker/inject-then.svg?branch=master)](https://travis-ci.org/bendrucker/inject-then) [![NPM version](https://badge.fury.io/js/inject-then.svg)](http://badge.fury.io/js/inject-then)
==========

> Promise wrapper for [Hapi](https://github.com/spumko/hapi)'s `server.inject`.

*`hapi@12`* and above return a promise when no callback is passed to `server.inject`. Use `inject-then` for hapi versions less than `12`.

## Setup

```bash
$ npm install inject-then
```

```js
server.register(require('inject-then'), function (err) {
  if (err) throw err
})
```

## API

#### `server.injectThen(options)` -> `promise(response)`

```js
server.injectThen('/posts')
  .then(function (response) {
    assert.equal(response.statusCode, 200)
    console.log('Success!')
  })
```

## Options

The following `options` can be provided at registration:

* `Promise`: An optional Promise constructor (ES6 Promise or anything that can be called with `new Promise`). [Bluebird](https://github.com/petkaantonov/bluebird) is used if an override is not provided.
