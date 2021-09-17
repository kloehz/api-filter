const getCondition = (attributes) => {
    const condition = attributes.filter(item => item.id === "ITEM_CONDITION");
    return condition[0].value_name
}

module.exports = { getCondition }