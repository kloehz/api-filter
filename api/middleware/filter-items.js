const { parsePrice } = require('../utils/parse-price');
const { getCondition } = require('../utils/get-condition');

const itemsSanitized = {
    author: {
        name: 'Guido Leonel',
        lastname: 'Cotelesso'
    },
    categories: [],
    items: []
}

const filterItems = (items) => {

    // Filtro de categorias
    const categories = items.filters[0].values[0].path_from_root.map((e) => e.name);
    itemsSanitized.categories = categories;

    const products = items.results.map(({
        id, title, prices, thumbnail, attributes, shipping 
    }) => {

        const { currency, amount, decimals } = parsePrice(prices.prices[0])
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
            free_shiping: shipping.free_shipping
        }

    });

    itemsSanitized.items = products

    return itemsSanitized

}

module.exports = {
    filterItems
}