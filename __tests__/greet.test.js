'use strict';

const greet = require('../lib/greet.js');

// const faker = require('faker');
// const randomName = faker.name();

describe('greeting test', () => {
  it('should concatonate a greeting', () => {
    let inputName = 'world';
    let answer = 'hello world';
    let results = greet.greeting(inputName);
    expect(results).toEqual(answer);
  })

  // it('should not work if input is not a string', () => {
  //   let inputName = randomName;

  // })
})
