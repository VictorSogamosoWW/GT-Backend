const commentDAO = require("../DAO/commentDAO");

const commentBAO = {
    crear: async function (data) {
        return await commentDAO.crear(data);
    },

    obtenerPorJuego: async function (idGame) {
        return await commentDAO.obtenerPorJuego(idGame);
    }
};

module.exports = commentBAO;