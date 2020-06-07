const general = require('./general');

function cashIn(money, config) {
    const fee = general.countFee(money, config.percents);
    return (fee < config.max.amount ? fee : config.max.amount);
}

module.exports = { cashIn };