const express = require('express');

const app = express();

//Endpoint ruta base
app.get('/', (req, res) => (res.send('Servidor corriendo y visualizando el endpoint base')))

// Iniciar el servidor
app.listen(3000, ()=> {console.log('Server is running on port 3000');});