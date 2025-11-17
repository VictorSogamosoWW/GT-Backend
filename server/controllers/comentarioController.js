const commentBAO = require("../BAO/commentBAO");

exports.crearComentario = async (req, res) => {
    try {
        const comentario = await commentBAO.crear(req.body);
        res.json(comentario);
    } catch (error) {
        res.status(500).json({ error: "Error creando comentario" });
    }
};

exports.obtenerComentarios = async (req, res) => {
    try {
        console.log("ID que llega:", req.params.idGame); // <--- verifica el id
        const comentarios = await commentBAO.obtenerPorJuego(req.params.idGame);
        console.log("Comentarios encontrados:", comentarios);
        res.json(comentarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo comentarios" });
    }
};