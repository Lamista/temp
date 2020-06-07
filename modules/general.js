function countFee(money, percents) {
    const fee = money * percents / 100;
    return round(fee);
}

function round(num) {
    return Math.ceil(num * 100) / 100;
}

module.exports = { countFee, round };