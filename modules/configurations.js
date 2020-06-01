const fetch = require('node-fetch');

async function getConfig(url) {
    const response = await fetch(url)
    const config = await response.json();
    return config;
}

module.exports = { getConfig };