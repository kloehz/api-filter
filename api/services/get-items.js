const { axiosConfig } = require('./axios-config');
const { getItemUrl } = require('../config/config');

const getItems = async ({q}) => {
    try{
        return await axiosConfig.get(getItemUrl, {
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