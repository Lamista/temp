const fs = require('fs');
const configurations = require('./modules/configurations');
const evaluate = require('./modules/evaluate');

const filePath = process.argv[2];
const users = JSON.parse(fs.readFileSync(filePath));
const urls = [
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural',
    'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical'
]

async function calculate() {
    try {
        const configs = await configurations.getConfig(urls);
        const fees = await evaluate.getFee(users, configs);
        fees.map(fee => console.log(fee.toFixed(2)));
    } catch (error) {
        console.log(error);
    }
}

calculate();