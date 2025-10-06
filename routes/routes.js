const express = require('express');
//Controllers
const filtrarJuegosPlataforma = require('../controllers/juegos_controller');
//Router
const router = express.Router();

//Endpoints
//Ruta base
router.get('/', (req, res) => (res.send('Servidor corriendo y visualizando el endpoint base')));

//Juegos completados y obtener juegos por plataforma
router.get('/juegos', filtrarJuegosPlataforma);

module.exports = router