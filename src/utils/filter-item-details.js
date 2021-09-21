const { parsePrice } = require('./parse-price');
const { getCondition } = require('./get-condition');

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
            pictures,
            shipping: {free_shipping},
            sold_quantity
        } = item

        const parsedItem = {
            id,
            title,
            price: {
                ...parsePrice({
                    currency_id,
                    price
                })
            },
            picture: pictures[0].url,
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