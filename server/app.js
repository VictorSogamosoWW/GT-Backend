const express = require('express');
const cors = require('cors');
const conectarDB = require('./db');
const juegosRouter = require('./routes/juegosRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
conectarDB();

//Rutas
app.use("/", juegosRouter);

// Iniciar el servidor
app.listen(3000, ()=> {console.log('Server is running on port 3000');});
