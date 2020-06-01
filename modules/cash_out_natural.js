const week_number = require('./week_number');

//create one week history
let oneWeekHistory;
let weekNo;

function cashOutNatural(user, config) {
    if (weekNo !== week_number.week(user.date)) {
        weekNo = week_number.week(user.date);
        oneWeekHistory = [];
        oneWeekHistory.push(user);
        return countCashOutFeeNatural(user.operation.amount, config);
    } else {
        oneWeekHistory.push(user);
        return checkUserHistory(oneWeekHistory, config);
    }
}

//check user's week's history
function checkUserHistory(weekHistory, config) {
    const id = weekHistory[weekHistory.length - 1].user_id;
    const oneUserHistory = weekHistory.filter(user => user.user_id === id);

    if (oneUserHistory.length === 1) {
        return countCashOutFeeNatural(weekHistory[weekHistory.length - 1].operation.amount, config)
    } else {
        let totalMoney = 0;
        for (let i = 0; i < oneUserHistory.length; i++) {
            totalMoney += oneUserHistory[i].operation.amount;
        }
        return countCashOutFeeNatural(weekHistory[weekHistory.length - 1].operation.amount, config, 1000);
    }
}

//count fee
function countCashOutFeeNatural(money, config, limit = 0) {
    const freeLimit = config.week_limit.amount;
    let fee = 0;
    if (money + limit <= freeLimit) {
        return fee.toFixed(2);

    } else if (money > 1000) {
        fee = Math.ceil((money - freeLimit) * config.percents) / 100;
        return fee.toFixed(2);

    } else {
        fee = Math.ceil(money * config.percents) / 100;
        return fee.toFixed(2);
    }
}

module.exports = { cashOutNatural };