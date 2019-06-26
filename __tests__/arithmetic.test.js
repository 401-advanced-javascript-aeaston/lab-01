'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');
const randomNum = faker.random.number();

describe('addition tests', () => {
  it('should work as expected', () => {
    let num1 = randomNum;
    let num2 = randomNum;
    let answer = num1 + num2;
    let results = arithmetic.add(num1, num2);
    expect(results).toEqual(answer);
  });
  it('should not work if either param is not a number', () =>{
    let num1 = 'banana';
    let num2 = randomNum;
    let results = arithmetic.add(num1, num2);
    expect(results).toBeNull(); 

    // if(typeof num1 !== "number" || typeof num2 !== "number") {
    //   return null;
  });
})