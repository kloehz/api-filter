const { axiosClient } = require('./axios-config');
const { getItemDescriptionUrl } = require('../config/config');
const { filterItem } = require('../utils/filter-item-details');


const getItemDetails = async (itemId) => {
    try{
        const item = await axiosClient.get(`/${getItemDescriptionUrl}${itemId}`);
        const itemDescription = await axiosClient.get(`/${getItemDescriptionUrl}${itemId}/description`);
        const parsedItem = filterItem(item.data, itemDescription.data);
        return parsedItem;
    }catch(e){
        throw e;
    }
}

module.exports = {
    getItemDetails
}