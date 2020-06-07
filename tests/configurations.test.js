const configurations = require('../modules/configurations');

const mockUrls = [
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical'
]

const typoUrls = [
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/TYPO',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical'
]

describe('fetching configurations', () => {
    test('fetching cash in configurations', async () => {
        expect.assertions(1);
        const all = await configurations.getConfig(mockUrls);
        expect(all[0]).toEqual({ "max": { "amount": 5, "currency": "EUR" }, "percents": 0.03 });
    });
    test('fetching cash out natural configurations', async () => {
        expect.assertions(1);
        const all = await configurations.getConfig(mockUrls);
        expect(all[1]).toEqual({ "percents": 0.3, "week_limit": { "amount": 1000, "currency": "EUR" } });
    });
    test('fetching cash out legal configurations', async () => {
        expect.assertions(1);
        const all = await configurations.getConfig(mockUrls);
        expect(all[2]).toEqual({ "min": { "amount": 0.5, "currency": "EUR" }, "percents": 0.3 });
    });
    test('fetching all configurations', async () => {
        expect.assertions(1);
        expect(await configurations.getConfig(mockUrls)).toEqual([
            { "max": { "amount": 5, "currency": "EUR" }, "percents": 0.03 },
            { "percents": 0.3, "week_limit": { "amount": 1000, "currency": "EUR" } },
            { "min": { "amount": 0.5, "currency": "EUR" }, "percents": 0.3 }
        ]);
    });
});

test('Fetch fails with an error', async () => {
    expect.assertions(1);
    const errorMsg = await configurations.getConfig(typoUrls);
    expect(errorMsg).toEqual('error');
});