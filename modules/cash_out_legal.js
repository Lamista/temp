const general = require('./general');

function cashOutLegal(money, config) {
    const fee = general.countFee(money, config.percents);
    if (fee > config.min.amount) {
        return fee; //keep 2 decimal places after all calculations
    } else {
        return config.min.amount;
    }
}

module.exports = { cashOutLegal };