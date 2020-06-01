const week_number = require('../modules/week_number');

test('week of the year', () => {
    expect(week_number.week('2016-01-05')).toEqual(1);
    expect(week_number.week('2020-06-01')).toEqual(23);
})