const juegoBAO = require('../BAO/juegoBAO');

// Obtener todos los juegos
async function obtenerJuegos(req, res) {
    try{
        const juegos = await juegoBAO.obtenerJuegos();
        res.json(juegos)
    }catch(error){
        console.error("Error al obtener juegos: ", error);
        res.status(500).json({error: "Error al obtener los juegos "});
    }
};

//Crear un juego
async function crearJuego(req, res) {
    try{
        const juego = await juegoBAO.crearJuego(req.body);
        res.json(juego);
    }catch(error){
        res.status(400).json({error: "Error al crear el juego " + error.message});
    }
}

module.exports = {obtenerJuegos, crearJuego};
