'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('concat', () => {
    require('../solutions/ArraySlice');
    require('../solutions/concat');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test(`should clone the array if no arguments are given`, () => {
        const clone = numbers.concat();
        expect(clone).to.deep.equal(numbers);
    });

    test(`should return an array which conatins orginal array and items gitven as argument`, () => {
        const itemsToAdd = [1, 2, 3, 1, 2, 3];
        const result = numbers.concat(...itemsToAdd);

        expect(result.slice(0, numbers.length)).to.deep.equal(numbers);
        expect(result.slice(numbers.length)).to.deep.equal(itemsToAdd);
    });

    test(`if an array is given as argument then items of that array inserts instead of that array`, () => {
        const itemsToAdd = [1, 2, 3, 1, 2, 3];
        const result = numbers.concat(...itemsToAdd, itemsToAdd, ...itemsToAdd);
        const tail = result.slice(numbers.length);

        expect(result.slice(0, numbers.length)).to.deep.equal(numbers);
        // using splice to change tail
        expect(tail.splice(0, itemsToAdd.length)).to.deep.equal(itemsToAdd);
        expect(tail.splice(0, itemsToAdd.length)).to.deep.equal(itemsToAdd);
        expect(tail).to.deep.equal(itemsToAdd);
    });
});
