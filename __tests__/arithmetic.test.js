'use strict';

const arithmetic = require('../lib/arithmetic.js');

const faker = require('faker');
const randomNum = faker.random.number();

describe('addition tests', () => {
  it('should add numbers as expected', () => {
    let num1 = randomNum;
    let num2 = randomNum;
    let answer = num1 + num2;
    let results = arithmetic.add(num1, num2);
    expect(results).toEqual(answer);
  });

  it('should not work if either param is not a number', () => {
    let num1 = 'banana';
    let num2 = randomNum;
    let results = arithmetic.add(num1, num2);
    expect(results).toBeNull(); 
  });
})

describe('subtraction tests', () => {
  it('should subtract numbers as expected', () => {
    let num1 = randomNum;
    let num2 = randomNum;
    let answer = num1 - num2;
    let results = arithmetic.subtract(num1, num2);
    expect(results).toEqual(answer);
  });

  it('should not work if either param is not a number', () => {
    let num1 = 'apple';
    let num2 = randomNum;
    let results = arithmetic.subtract(num1, num2);
    expect(results).toBeNull();
  });
})

describe('multiply tests', () => {
  it('should multiple numbers as expected', () => {
    let num1 = randomNum;
    let num2 = randomNum;
    let answer = num1 * num2;
    let results = arithmetic.multiply(num1, num2);
    expect(results).toEqual(answer);
  });

  it('should not work if either param is not a number', () => {
    let num1 = 'blueberry';
    let num2 = randomNum;
    let results = arithmetic.multiply(num1, num2);
    expect(results).toBeNull();
  });
})

describe('division tests', () => {
  it('should divide numbers as expected', () => {
    let num1 = randomNum;
    let num2 = randomNum;
    let answer = num1 / num2;
    let results = arithmetic.divide(num1, num2);
    expect(results).toEqual(answer);
  });

  it('should not work if either param is not a number', () => {
    let num1 = 'mango';
    let num2 = randomNum;
    let results = arithmetic.divide(num1, num2);
    expect(results).toBeNull();
  });

  it('throws error if dividing by zero', () => {
    expect(arithmetic.divide(3, 0)).toThrow();
    let num1 = randomNum;
    let num2 = 0;
    let results = arithmetic.divide(num1, num2);
    expect(results).toThrow('You cannot divide by zero');
  })
})