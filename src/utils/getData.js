const axios = require('axios');

const getData = url => axios.get(url);
module.exports = getData;
