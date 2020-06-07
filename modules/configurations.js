const fetch = require('node-fetch');

async function getConfig(urls) {
    try {
        const allConfig = await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
        }));
        return allConfig;
    } catch (error) {
        console.log(error);
        return "error";
    }
}

module.exports = { getConfig };