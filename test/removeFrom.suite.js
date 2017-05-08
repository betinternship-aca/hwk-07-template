'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');
const fs = require('fs');

global.window = global;

suite('removeFrom', () => {
    require('../solutions/removeFrom');

    const code = fs.readFileSync('solutions/removeFrom.js', {encoding: 'utf8'});
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const clone = arr => Array.prototype.slice.call(arr);

    test(`should remove an item from the given index if count isn't specified`, () => {
        const indexToRemoveFrom = 5;
        const cloneOfNumbers = clone(numbers);

        cloneOfNumbers.removeFrom(indexToRemoveFrom);

        expect(cloneOfNumbers.length).to.equal(numbers.length - 1);
        expect(cloneOfNumbers[indexToRemoveFrom]).to.equal(numbers[indexToRemoveFrom + 1]);
    });

    test(`should remove multiple items from given index if count is greater than 1`, () => {
        const indexToRemoveFrom = 5;
        const countToRemove = 3;
        const cloneOfNumbers = clone(numbers);

        cloneOfNumbers.removeFrom(indexToRemoveFrom, countToRemove);

        expect(cloneOfNumbers.length).to.equal(numbers.length - countToRemove);
        expect(cloneOfNumbers[indexToRemoveFrom]).to.equal(numbers[indexToRemoveFrom + countToRemove]);
    });

    test(`should return removed items with an array`, () => {
        const indexToRemoveFrom = 5;
        const countToRemove = 3;
        const cloneOfNumbers = clone(numbers);

        const removedItems = cloneOfNumbers.removeFrom(indexToRemoveFrom, countToRemove);

        expect(removedItems).to.be.an('array');
        removedItems.forEach((item, ind) => {
            expect(item).to.equal(numbers[indexToRemoveFrom + ind]);
        });
    });

    test(`should use splice`, () => {
        expect(/\.\s*splice\s*\(/.test(code)).to.be.true;
    });
});
