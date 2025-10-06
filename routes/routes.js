const express = require('express');
//Router
const router = express.Router();

//Endpoints
//Ruta base
router.get('/', (req, res) => (res.send('Servidor corriendo y visualizando el endpoint base')));

//Juegos completados y obtener juegos por plataforma
router.get('/juegos', (req,res)=>{
    const { plataforma } = req.query;
    const resultado = plataforma
    ? juegos_completados.filter(juego => juego.plataforma === plataforma)
    : juegos_completados;
    res.send(resultado);
})

module.exports = router