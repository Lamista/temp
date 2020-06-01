const week = (year, month, day) => {
    function serial(days) { return 86400000 * days; }
    function dateserial(year, month, day) { return (new Date(year, month - 1, day).valueOf()); }
    function weekday(date) { return (new Date(date)).getDay() + 1; }
    function yearserial(date) { return (new Date(date)).getFullYear(); }
    var date = year instanceof Date ? year.valueOf() : typeof year === "string" ? new Date(year).valueOf() : dateserial(year, month, day),
        date2 = dateserial(yearserial(date - serial(weekday(date - serial(1))) + serial(4)), 1, 3);
    const result = ((date - date2 + serial(weekday(date2) + 5)) / serial(7));
    return Math.floor(result);

}

module.exports = { week };