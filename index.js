const express = require('express');
const app = express();
const { getItems } = require('./api/services/get-items');
const { filterItems } = require('./api/middleware/filter-items');

app.get('/api/items', async (req, res) => {

    try{

        const test = await getItems('vasos');
        filterItems(test.data)
    
        res.json({});
    }catch(e){
        console.log('error: ', e);
    }
});

app.listen(9000, () => {
    console.log('Servidor inicado en el puerto 9000');
});