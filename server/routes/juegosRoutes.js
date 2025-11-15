const express = require('express');
const {obtenerJuegos, crearJuego} = require('../controllers/juegos_controller');

const router = express.Router();

router.get('/juegos', obtenerJuegos);
router.post('/juegos', crearJuego);


module.exports = router;