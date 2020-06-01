const cash_out_natural = require('../modules/cash_out_natural');

const config = { "percents": 0.3, "week_limit": { "amount": 1000, "currency": "EUR" } };
const mockUsers = [
    { "date": "2016-01-16", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1100.00, "currency": "EUR" } },
    { "date": "2016-01-16", "user_id": 2, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-01-17", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } },
    { "date": "2016-01-18", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } }
];

describe("Natural type user's commissions", () => {
    test('fee is 0.3%, if amount > 1000 from exceeded amount', () => {
        expect(cash_out_natural.cashOutNatural(mockUsers[0], config)).toEqual("0.30");
    });
    test('1000.00 EUR per week(from monday to sunday) is free of charge.', () => {
        expect(cash_out_natural.cashOutNatural(mockUsers[1], config)).toEqual("0.00");
    });
    test('If total amount is exceeded 1000 in one week - checking fee.', () => {
        expect(cash_out_natural.cashOutNatural(mockUsers[2], config)).toEqual("3.00");
    });
    test('If new week, 1000EUR free of charge.', () => {
        expect(cash_out_natural.cashOutNatural(mockUsers[3], config)).toEqual("0.00");
    });
});