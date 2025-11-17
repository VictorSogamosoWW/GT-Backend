const comentario = require("../models/comentario");

const comentarioDAO = {
    crear: async function (data) {
        return await comentario.create(data);
    },

    obtenerPorJuego: async function(idGame){
        return (await comentario.find({idGame})).sort({created: -1});
    }
};

module.exports = comentarioDAO;