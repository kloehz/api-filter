const { axiosConfig } = require('./axios-config');
const { getItemsUrl } = require('../config/config');

const getItems = async ({q}) => {
    try{
        return await axiosConfig.get(getItemsUrl, {
            params: {
                q
            }
        });
    }catch(e){
        throw e;
    }
}

module.exports = {
    getItems
}