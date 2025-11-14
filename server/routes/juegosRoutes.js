const express = require('express');
//Controllers
const {obtenerJuegos} = require('../controllers/juegos_controller');
//Router
const router = express.Router();

//Endpoints
//Ruta base
const rutaBase = (req,res) => {
    res.send('Servidor corriendo y visualizando el endpoint base');
};

//Obtener juegos
const rutaObtenerJuegos = (req, res) => {
    obtenerJuegos(req,res);
};

router.get('/', rutaBase);
router.get('/juegos', rutaObtenerJuegos);


module.exports = router;