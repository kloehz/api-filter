const { axiosClient } = require('./axios-config');
const { getItemsUrl } = require('../config/constants');
const { filterItems } = require('../utils/filter-items');

const getItems = async ({q}) => {
    try{
        const response = await axiosClient.get(`/${getItemsUrl}`, {
            params: {
                q
            }
        });
        const res = filterItems(response.data)

        return res;
    } catch(e) {
        throw e;
    }
}

module.exports = {
    getItems
}