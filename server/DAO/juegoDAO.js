const Juego = require('../models/juego');

const juegoDAO = {
    async crear(juegoData) {
        const nuevoJuego = new Juego(juegoData);
        return await nuevoJuego.save();
    },

    async obtenerTodos() {
        return await Juego.find({});
    },

    async buscarNombreExacto(name){
        return await Juego.findOne({name})
    },

    async actualizar(id, data){
        return await Juego.findByIdAndUpdate(id, data, {new: true});
    },
    
    async eliminar(id){
        return await Juego.findByIdAndDelete(id);
    }

};

module.exports = juegoDAO;