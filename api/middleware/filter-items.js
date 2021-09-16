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

    const products = {
        id: '',
        title: '',
        price: {
            currency: '',
            amount: 1,
            decimals: 1
        },
        picture: '',
        condition: '',
        free_shiping: true
    }

}

module.exports = {
    filterItems
}