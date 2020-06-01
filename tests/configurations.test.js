const configurations = require('../modules/configurations');

const cashInApi = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in';
const cashOutApiNatural = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural';
const cashOutApiLegal = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical';

describe('fetching configurations', () => {
    test('fetching cash in configurations', async () => {
        expect.assertions(1);
        const config = await configurations.getConfig(cashInApi);
        expect(config).toEqual({ "max": { "amount": 5, "currency": "EUR" }, "percents": 0.03 });
    });
    test('fetching cash out natural type user configurations', async () => {
        expect.assertions(1);
        const config = await configurations.getConfig(cashOutApiNatural);
        expect(config).toEqual({ "percents": 0.3, "week_limit": { "amount": 1000, "currency": "EUR" } });
    });
    test('fetching cash out legal type user configurations', async () => {
        expect.assertions(1);
        const config = await configurations.getConfig(cashOutApiLegal);
        expect(config).toEqual({ "percents": 0.3, "min": { "amount": 0.5, "currency": "EUR" } });
    });
});
