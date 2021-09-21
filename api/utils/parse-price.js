const parsePrice = ({ currency_id, price }) => {
    
    const integer = parseInt(price)
    const decimals = Number(((price - integer)*100).toFixed(2))

    return { currency: currency_id, amount: integer, decimals  }
}

module.exports = {
    parsePrice
}