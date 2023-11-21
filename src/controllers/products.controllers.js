const db = require('../database/models')

module.exports = {  
    listado:(req, res) =>{
        const productos = db.Productos.findAll();
        res.json(productos);
    }
} 