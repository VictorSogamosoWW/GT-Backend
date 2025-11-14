const juegoDAO = require("../DAO/juegoDAO");

async function crearJuego(req, res){
    try{
        const juegos = await juegoDAO.crear(req.body);
        res.json(juegos);
    }catch(error){
        res.status(500).json({error: "Error al crear el juego"});
    }
};

module.exports = crearJuego;
