const juegos_completados = require('../models/juego');

filtrarJuegosPlataforma = (req, res) => {
    const plataforma = req.query;

    const resultado = plataforma
    ? juegos_completados.filter(juego => juego.plataforma === plataforma)
    : juegos_completados;
    res.send(resultado);
};

module.exports = {filtrarJuegosPlataforma}
