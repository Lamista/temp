
const cash_in = require('./cash_in');
const cash_out_legal = require('./cash_out_legal');
const cash_out_natural = require('./cash_out_natural');

async function getFee(users, [cash_in_config, cash_out_natural_config, cash_out_legal_config]) {
    return users.map(user => {
        if (user.type === 'cash_in') {
            const cashin = cash_in.cashIn(user.operation.amount, cash_in_config);
            return cashin;
        } else if (user.user_type === 'natural') {
            const natural = cash_out_natural.cashOutNatural(user, cash_out_natural_config);
            return natural;
        } else {
            const legal = cash_out_legal.cashOutLegal(user.operation.amount, cash_out_legal_config);
            return legal;
        }
    });
};

module.exports = { getFee };