const { axiosConfig } = require('./axios-config');
const { getItemsUrl } = require('../config/config');

const getItems = async (query) => {
    return await axiosConfig.get(getItemsUrl, {
        params: {
            q: query
        }
    });
}

module.exports = {
    getItems
}