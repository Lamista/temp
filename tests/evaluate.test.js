const evaluate = require('../modules/evaluate');

const mockUsers = [
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 147.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
    { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
    { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.00, "currency": "EUR" } }
];

const [cash_in_config, cash_out_natural_config, cash_out_legal_config] = [
    { "max": { "amount": 5, "currency": "EUR" }, "percents": 0.03 },
    { "percents": 0.3, "week_limit": { "amount": 1000, "currency": "EUR" } },
    { "min": { "amount": 0.5, "currency": "EUR" }, "percents": 0.3 }
];

test('commissions are calculated by operation and user type', async () => {
    expect.assertions(1);
    expect(await evaluate.getFee(mockUsers, [cash_in_config, cash_out_natural_config, cash_out_legal_config])).toEqual([0.09, 0.05, 0.9, 87, 3]);
});


