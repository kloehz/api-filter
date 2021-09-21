const axios = require('axios').default
const { baseUrl } = require('../config/config')

const axiosClient = axios.create({
    baseURL: baseUrl
});

module.exports = {
    axiosClient
}