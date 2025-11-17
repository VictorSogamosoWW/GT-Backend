const express = require('express');
const {obtenerJuegos, crearJuego, editarJuego, eliminarJuego} = require('../controllers/juegos_controller');

const router = express.Router();

router.get('/juegos', obtenerJuegos);
router.post('/juegos', crearJuego);
router.put('/juegos/:id', editarJuego);
router.delete('/juegos/:id', eliminarJuego);


module.exports = router;