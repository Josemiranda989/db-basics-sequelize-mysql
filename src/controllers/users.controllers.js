const db = require('../database/models')

module.exports = {  
    listado:(req, res) =>{
        const usuarios = db.Usuarios.findAll();
        res.json(usuarios);
    }
} 