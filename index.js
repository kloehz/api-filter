const express = require('express');
const app = express();
const { getItems } = require('./api/services/get-items');
const { filterItems } = require('./api/middleware/filter-items');

app.get('/api/items', async (req, res) => {

    try{

        let response = await getItems('vasos');
        const data = filterItems(response.data);
    
        res.json({
            status: 'OK',
            data,
        });
    }catch(error){
        res.json({
            status: 'ERROR',
            error
        })
    }
});

app.listen(9000, () => {
    console.log('Servidor inicado en el puerto 9000');
});