const db = require('../database/models')

module.exports = {  
    indice:(req, res) => {
        res.send(`
        <ul>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/productos/1">Detalle producto :id</a></li>
        <li><a href="/usuarios">Usuarios</a></li>
        <li><a href="/usuarios/1">Perfil usuario :id</a></li>
        </ul>
        `);
    }
} 