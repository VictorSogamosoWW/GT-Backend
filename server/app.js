const express = require('express');
const app = express();
const routes = require('./routes/routes');
const conectarDB = require('./db');

//Usar rutas
app.use(routes);

// Conectar a la base de datos
conectarDB();

// Iniciar el servidor
app.listen(3000, ()=> {console.log('Server is running on port 3000');});
