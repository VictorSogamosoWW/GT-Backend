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

        return res.status(201).json(juego);

    }catch(error){
        return res.status(400).json({error: "Error al crear el juego " + error.message});
    }
}

//Editar Juego
async function editarJuego(req, res){
    try{
        const id = req.params.id;
        const data = req.body;

        const juegoActualizado = await juegoBAO.editarJuego(id, data);

        res.json(juegoActualizado);
    } catch (error){
        return res.status(400).json({error: "Error al editar el juego " + error.message});
    }
}

//Eliminar juego
async function eliminarJuego(req,res){
    try{
        const id = req.params.id;
        await juegoBAO.eliminarJuego(id);
        res.json({message: "Juego eliminado"});
    } catch (error){
        return res.status(400).json({error: "Error al eliminar el juego " + error.message});
    }
}

module.exports = {obtenerJuegos, crearJuego, editarJuego, eliminarJuego};
