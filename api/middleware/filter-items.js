const { parsePrice } = require('../utils/parse-price');
const { getCondition } = require('../utils/get-condition');

const itemsSanitized = {
    author: {
        name: 'Guido Leonel',
        lastname: 'Cotelesso'
    },
    categories: [],
    items: [],
}

const filterItems = (items) => {
    // Filtro de categorias
    try {
        if (!items.results.length) {
            throw 'No se encontraron resultados'
        }
        const categories = items.filters[0]?.values[0]?.path_from_root.map((e) => e.name);
        itemsSanitized.categories = categories ? categories : [];
    
        const products = items.results.map(({
            id, title, price, currency_id, thumbnail, attributes, shipping, seller_address
        }) => {
            const { currency, amount, decimals } = parsePrice({currency_id, price})
            const condition = getCondition(attributes);
    
            return productSanitized = {
                id: id,
                title: title,
                price: {
                    currency,
                    amount,
                    decimals
                },
                picture: thumbnail,
                condition,
                free_shiping: shipping.free_shipping,
                seller_address: seller_address.state.name
            }
        });
    
        itemsSanitized.items = products
        return itemsSanitized

    } catch( error ){
        throw error;
    }
}

module.exports = {
    filterItems
}