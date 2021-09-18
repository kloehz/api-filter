const express = require('express');
const cors = require('cors');
const { getItems } = require('./api/services/get-items');
const { filterItems } = require('./api/middleware/filter-items');

const app = express();
app.use(cors());

app.get('/api/items', async (req, res) => {

    try{
        let response = await getItems(req.query);
        const data = filterItems(response.data);
        res.json(data);
    }catch(error){
        res.json({
            status: 'ERROR',
            error,
            data: []
        })
    }
});

app.listen(9000, () => {
    console.log('Servidor inicado en el puerto 9000');
});