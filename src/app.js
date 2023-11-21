const path = require('path');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index.routes')
const productsRoutes = require('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')

const port = process.env.PORT || 3000;

app.use(indexRoutes);
app.use('/productos', productsRoutes);
app.use('/usuarios', usersRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=> {
    console.log(`Server running in http://localhost:${port}`);
});