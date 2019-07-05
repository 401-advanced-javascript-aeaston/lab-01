'use strict';

const greet = require('../lib/greet.js');

const faker = require('faker');
const randomName = faker.name.firstName();

describe('greeting test', () => {
  it('should concatonate a greeting with "world" as input', () => {
    let inputName = 'world';
    let answer = 'hello world';
    let results = greet.greeting(inputName);
    expect(results).toEqual(answer);
  })

  it('should concatonte a greeting with a randomized name as input', () => {
    let inputName = randomName;
    let answer = `hello ${randomName}`;
    let results = greet.greeting(inputName);
    expect(results).toEqual(answer);
  })

  it('should not work if input is not a string', () => {
    let inputName = 100;
    let answer = null;
    let results = greet.greeting(inputName);
    expect(results).toEqual(answer);
  })
})
