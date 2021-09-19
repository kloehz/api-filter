const { axiosConfig } = require('./axios-config');
const { getItemDescriptionUrl } = require('../config/config');
const { filterItem } = require('../middleware/filter-item-details');


const getItemDetails = async (itemId) => {
    try{
        const item = await axiosConfig.get(`${getItemDescriptionUrl}${itemId}`);
        const itemDescription = await axiosConfig.get(`${getItemDescriptionUrl}${itemId}/description`);
        const parsedItem = filterItem(item.data, itemDescription.data);
        return parsedItem;
    }catch(e){
        throw e;
    }
}

module.exports = {
    getItemDetails
}