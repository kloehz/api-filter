const parsePrice = ({ currency_id, amount }) => {

    const integer = parseInt(amount)
    const decimals = Number(((amount - integer)*100).toFixed(2))

    return { currency: currency_id, amount: integer, decimals  }
}

module.exports = {
    parsePrice
}