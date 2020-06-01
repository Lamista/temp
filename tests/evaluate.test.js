const evaluate = require('../modules/evaluate');

const mockUsers = [
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 147.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
    { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } }
];

test('correct rounding', async () => {
    expect.assertions(1)
    expect(await evaluate.getFee(mockUsers[1])).toEqual("0.05");//~0.041 without rounding
});

describe('commissions are calculated by operation and user type', () => {
    test('commissions with cash in operation', async () => {
        expect.assertions(1)
        expect(await evaluate.getFee(mockUsers[0])).toEqual("0.09");
    });
    test('commissions with cash out operation and legal type user', async () => {
        expect.assertions(1)
        expect(await evaluate.getFee(mockUsers[2])).toEqual("0.90");
    });
    test('commissions with cash out operation and natural type user', async () => {
        expect.assertions(1)
        expect(await evaluate.getFee(mockUsers[3])).toEqual("87.00");
    });
});


