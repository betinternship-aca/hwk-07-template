'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('sum', () => {
    require('../solutions/ArraySlice');
    require('../solutions/sum');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = (1 + 10) * 10 / 2;

    test(`should return the sum of its arguments`, () => {
        expect(Math.sum(...numbers)).to.equal(sum);
        expect(Math.sum(...numbers, ...numbers)).to.equal(sum * 2);
    });
});
