const { axiosConfig } = require('./axios-config');
const { getItemsUrl } = require('../config/config');

const getItems = async ({q}) => {
    return await axiosConfig.get(getItemsUrl, {
        params: {
            q
        }
    });
}

module.exports = {
    getItems
}