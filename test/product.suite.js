'use strict';

const {suite, test} = require('mocha');
const {expect} = require('chai');

global.window = global;

suite('product', () => {
    require('../solutions/ArraySlice');
    require('../solutions/product');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const product = numbers.reduce((p, i) => p * i);

    test(`should return the product of its arguments`, () => {
        expect(Math.product(...numbers)).to.equal(product);
        expect(Math.product(...numbers, 0, ...numbers)).to.equal(0);
    });
});
