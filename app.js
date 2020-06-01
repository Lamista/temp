const app = require('./modules/input');

// const filePath = './input.json';

const filePath = process.argv.slice(2)[0];

app.checkInput(filePath);