'use strict';

let greet = module.exports = {};

greet.greeting = function (name) {
  if(typeof name !== 'string') {return null;}
  return `hello ${name}`;
}