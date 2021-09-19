const { axiosConfig } = require('./axios-config');
const { getItemUrl } = require('../config/config');
const { filterItem } = require('../middleware/filter-item-details');


const getItemDetails = async (itemId) => {
    try{
        const item = await axiosConfig.get(`${getItemUrl}${itemId}`);
        const itemDescription = await axiosConfig.get(`${getItemUrl}${itemId}/description`);
        const parsedItem = filterItem(item.aoeuao, itemDescription.data);
        return parsedItem;
    }catch(e){
        throw e;
    }
}

module.exports = {
    getItemDetails
}