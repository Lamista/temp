const general = require('../modules/general');

test('Counting money and percents', () => {
    expect(general.countFee(100, 3)).toEqual(3);
})

test('Correct rounding', () => {
    expect(general.round(0.041)).toEqual(0.05);
})