const comentarioDAO = require("../DAO/comentarioDAO");

const comentarioBAO = {
    crear: async function (data) {
        return await comentarioDAO.crear(data);
    },

    obtenerPorJuego: async function (idGame) {
        return await comentarioDAO.obtenerPorJuego(idGame);
    }
};

module.exports = comentarioBAO;
