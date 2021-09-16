const axios = require('axios').default
const { baseUrl } = require('../config/config')

const axiosConfig = axios.create({
    baseURL: baseUrl
});

module.exports = {
    axiosConfig
}