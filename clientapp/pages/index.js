/* Browserify needs static imports, so no cleverness allowed here */

module.exports = {
  instructions: require('./instructions'),
  todo: require('./todo'),
  wait: require('./wait'),
  welcome: require('./welcome')
};
