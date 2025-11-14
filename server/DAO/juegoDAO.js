const Juego = require('../models/juego');

const juegoDAO = {
    async crear(juegoData) {
        const nuevoJuego = new Juego(juegoData);
        return await nuevoJuego.save();
    },

    async obtenerTodos() {
        return await Juego.find({});
    }

};

module.exports = juegoDAO;