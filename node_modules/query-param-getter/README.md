# query-param-getter

Client module for grabbing query parameters by name from the URL. Result is purposely not cached since URL can change.

CommonJS module for the client designed for use with browserify.

## install

```
npm install query-param-getter
```

## example

```js
var queryGetter = require('query-param-getter');

// returns string or `undefined` if not found.
var result = queryGetter('nameOfParam');
```

## license

MIT
