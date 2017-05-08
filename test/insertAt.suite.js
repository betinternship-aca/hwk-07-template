'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('insertAt', () => {
    require('../solutions/ArraySlice');
    require('../solutions/insertAt');

    const code = fs.readFileSync('solutions/insertAt.js', {encoding: 'utf8'});
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const clone = arr => Array.prototype.slice.call(arr);

    test(`should insert an item at the given index`, () => {
        const indexToInsertAt = 5;
        const valueToInsert = 123;
        const cloneOfNumbers = clone(numbers);

        cloneOfNumbers.insertAt(indexToInsertAt, valueToInsert);

        expect(cloneOfNumbers.length).to.equal(numbers.length + 1);
        expect(cloneOfNumbers[indexToInsertAt]).to.equal(valueToInsert);
        expect(cloneOfNumbers[indexToInsertAt + 1]).to.equal(numbers[indexToInsertAt]);
    });

    test(`should insert multiple items to the given index when more than one argument is specified`, () => {
        const indexToInsertAt = 5;
        const valuesToInsert = [1, 2, 3, 4, 5, 6];
        const cloneOfNumbers = clone(numbers);

        cloneOfNumbers.insertAt(indexToInsertAt, ...valuesToInsert);

        expect(cloneOfNumbers.length).to.equal(numbers.length + valuesToInsert.length);
        expect(cloneOfNumbers.slice(indexToInsertAt, indexToInsertAt + valuesToInsert.length)).to.deep.equal(valuesToInsert);
    });

    test(`should return the length of array after insertion`, () => {
        const indexToInsertAt = 5;
        const valuesToInsert = [1, 2, 3, 4, 5, 6];
        const cloneOfNumbers = clone(numbers);

        var count = cloneOfNumbers.insertAt(indexToInsertAt, ...valuesToInsert);

        expect(count).to.equal(cloneOfNumbers.length);
    });

    test(`should use splice`, () => {
        expect(/\.\s*splice\s*/.test(code)).to.be.true;
    });
});
