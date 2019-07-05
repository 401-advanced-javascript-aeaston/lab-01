'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a, b) {
  if(typeof a !== "number" || typeof b !== "number") {return null;}
  return a + b;
};

arithmetic.subtract = function (a, b) {
  if(typeof a !== "number" || typeof b !== "number") {return null;}
  return a - b;
};

arithmetic.multiply = function (a, b) {
  if(typeof a != "number" || typeof b != "number") {return null;}
  return a * b;
};

arithmetic.divide = function (a, b) {
  if(typeof a != "number" || typeof b != "number") {return null;}
  else if (b === 0) {throw ('You cannot divide by zero');}
  else return a / b;
};
