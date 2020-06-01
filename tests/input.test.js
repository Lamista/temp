const app = require('../modules/input');

const filePath = './input.json';

test('Input is object', async () => {
    expect.assertions(1);
    expect(typeof (await app.getUserInfo(filePath))).toBe("object");
});
