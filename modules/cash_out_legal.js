function cashOutLegal(money, config) {
    const fee = Math.ceil(money * config.percents) / 100;
    if (fee > config.min.amount) {
        return fee.toFixed(2); //keep 2 decimal places after all calculations
    } else {
        return config.min.amount.toFixed(2);
    }
}

module.exports = { cashOutLegal };