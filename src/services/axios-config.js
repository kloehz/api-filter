const axios = require('axios').default
const { base_url } = require('../../config')

const axiosClient = axios.create({
    baseURL: base_url
});

module.exports = {
    axiosClient
}