const cash_in = require('../modules/cash_in');

const config = { "max": { "amount": 5, "currency": "EUR" }, "percents": 0.03 };

describe('Cash in commission fee - 0.03% from total amount, but no more than 5.00 EUR.', () => {
    test('fee is 0.03%', () => {
        expect(cash_in.cashIn(100, config)).toEqual("0.03");
    });
    test('fee is no more than 5.00 EUR', () => {
        expect(cash_in.cashIn(100000, config)).toEqual("5.00");
    });
});
