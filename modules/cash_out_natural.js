const general = require('./general');
const moment = require('moment');

//get week number

const week = date => moment(date).isoWeek();

//create one week history
let oneWeekHistory;
let weekNo;

function cashOutNatural(user, config) {
    if (weekNo !== week(user.date)) {
        weekNo = week(user.date);
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
        if (totalMoney - config.week_limit.amount < config.week_limit.amount) {
            return countCashOutFeeNatural(totalMoney, config, config.week_limit.amount);
        } else {
            return countCashOutFeeNatural(weekHistory[weekHistory.length - 1].operation.amount, config, config.week_limit.amount);
        }
    }
}

//evaluate how to count fee
function countCashOutFeeNatural(money, config, limit = 0) {
    let fee = 0;
    if (money + limit <= config.week_limit.amount) {
        return fee;
    } else if (money > config.week_limit.amount) {
        money -= config.week_limit.amount;
        fee = general.countFee(money, config.percents);
        return fee;
    } else {
        fee = general.countFee(money, config.percents);
        return fee;
    }
}

module.exports = { cashOutNatural };