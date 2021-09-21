const express = require('express');
const cors = require('cors');
const { getItems } = require('./api/services/get-items');
const { getItemDetails } = require('./api/services/get-item-details');
const { json } = require('express');

const app = express();
app.use(cors());

app.get('/api/items', async (req, res) => {
    try{
        const data = await getItems(req.query);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({
            status: 'ERROR',
            error,
            data: []
        })
    }
});

app.get('/api/items/:id', async (req, res) => {
    try{
        const id = req.params.id
        const data = await getItemDetails(id);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({
            status: 'ERROR',
            error,
            data: []
        })
    }
});

app.listen(9000, () => {
    console.log('Servidor inicado en el puerto 9000');
});