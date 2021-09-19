const { parsePrice } = require('../utils/parse-price');
const { getCondition } = require('../utils/get-condition');

const itemSanitized = {
    author: {
        name: 'Guido Leonel',
        lastname: 'Cotelesso'
    },
    item: {}
}

const filterItem = (item, description) => {
    
    try{
        const {
            id,
            title,
            price,
            currency_id,
            secure_thumbnail,
            shipping: {free_shipping},
            sold_quantity
        } = item

        const parsedItem = {
            id,
            title,
            price: {
                ...parsePrice({
                    currency_id: currency_id,
                    amount: price
                })
            },
            picture: secure_thumbnail,
            condition: getCondition(item.attributes),
            free_shipping,
            sold_quantity,
            description: description.plain_text
        }

        itemSanitized.item = parsedItem;

        return itemSanitized
    }catch(error){
        throw error
    }
}

module.exports = { filterItem }