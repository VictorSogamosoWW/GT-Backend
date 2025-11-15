const juegoDAO = require("../DAO/juegoDAO");

const juegoBAO = {

    async obtenerJuegos() {
        try{
            return await juegoDAO.obtenerTodos();
        }catch(error){
            console.error("Error al obtener los juegos: ", error);
        }
    },

    async crearJuego(data){
        try{

            //Validaciones
            const existe = await juegoDAO.buscarNombreExacto(data.name);
            if(existe) throw new Error("El juego ya existe");

            if(!data.name) throw new Error("El nombre es requerido");
            if(!data.publisher) throw new Error("La publisher es requerida");
            if(!data.type) throw new Error("El tipo es requerido");

            if(!data.hoursPlayed) data.hoursPlayed = 0;
            if(data.status == null) data.status = false;
            if(!data.rating) data.rating = 0;

            return await juegoDAO.crear(data);
        } catch(error){
            console.error("Error al crear el juego: ", error);
        }
    }

};

module.exports = juegoBAO;
