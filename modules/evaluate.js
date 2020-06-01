const configurations = require('./configurations');
const cash_in = require('./cash_in');
const cash_out_legal = require('./cash_out_legal');
const cash_out_natural = require('./cash_out_natural');

const cashInApi = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in';
const cashOutApiNatural = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural';
const cashOutApiLegal = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical';

async function getFee(user) {

    if (user.type === 'cash_in') {
        const configCashIn = await configurations.getConfig(cashInApi);
        return cash_in.cashIn(user.operation.amount, configCashIn);
    } else if (user.user_type === 'natural') {
        const configNatural = await configurations.getConfig(cashOutApiNatural);
        return cash_out_natural.cashOutNatural(user, configNatural);
    } else {
        const configLegal = await configurations.getConfig(cashOutApiLegal);
        return cash_out_legal.cashOutLegal(user.operation.amount, configLegal);

    }
}

module.exports = { getFee };