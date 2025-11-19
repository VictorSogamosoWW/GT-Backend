const comentarioBAO = require("../BAO/comentarioBAO.js");

async function crearComentario(req, res) {
    try {
        const comentario = await comentarioBAO.crear(req.body);
        res.json(comentario);
    } catch (error) {
        res.status(500).json({ error: "Error creando comentario" });
    }
};

async function obtenerComentarios(req, res) {
    try {
        const comentarios = await comentarioBAO.obtenerPorJuego(req.params.idGame);
        res.json(comentarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo comentarios" });
    }
};

module.exports = {crearComentario, obtenerComentarios };
