const cash_out_legal = require('../modules/cash_out_legal');

const config = { "percents": 0.3, "min": { "amount": 0.5, "currency": "EUR" } };

describe('Cash out legal type commission fee - 0.3% from amount, but not less than 0.50 EUR for operation.', () => {
    test('fee is 0.3%', () => {
        expect(cash_out_legal.cashOutLegal(1000, config)).toEqual(3.00);
    });
    test('fee is not less than 0.50 EUR', () => {
        expect(cash_out_legal.cashOutLegal(100, config)).toEqual(0.50);
    });
});