function cashIn(money, config) {

    const fee = Math.ceil(money * config.percents) / 100; //to round up
    return (fee < config.max.amount ? fee.toFixed(2) : config.max.amount.toFixed(2));
}

module.exports = { cashIn };