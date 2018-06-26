'use strict';
console.log('hello node')

var s = 'hello'
function greet (name) {
  console.log(s+','+name+'!')
}

module.exports = greet