const fs = require('fs');

const evaluate = require('./evaluate');

async function checkInput(filePath) {
    const users = getUserInfo(filePath);
    for (let i = 0; i < users.length; i++) {
        console.log(await evaluate.getFee(users[i]));
    };
};

function getUserInfo(filePath) {
    return JSON.parse(fs.readFileSync(filePath));
}

module.exports = { getUserInfo, checkInput };