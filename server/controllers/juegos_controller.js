const JuegoDAO = require('../DAO/juegoDAO');

// Leer todos lo juegos desde Atlas
const obtenerJuegos = async (req, res) => {
    try{
        const juegos = await JuegoDAO.obtenerTodos();
        res.json(juegos)
    }catch(error){
        console.error("Error al obtener juegos: ", error);
        res.status(500).json({error: "Error al obtener los juegos "});
    }
};

module.exports = {obtenerJuegos};
