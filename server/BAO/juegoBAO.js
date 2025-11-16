const juegoDAO = require("../DAO/juegoDAO");

const juegoBAO = {

    async obtenerJuegos() {
        try{
            return await juegoDAO.obtenerTodos();
        }catch(error){
            console.error("Error al obtener los juegos: ", error);
            throw error;
        }
    },

    async crearJuego(data){
        try{

            //Validaciones
            const existe = await juegoDAO.buscarNombreExacto(data.name) || [];
            if(existe.length > 0) throw new Error("El juego ya existe");

            if(!data.name) throw new Error("El nombre es requerido");
            if(!data.publisher) throw new Error("La publisher es requerida");
            if(!data.type) throw new Error("El tipo es requerido");

            if(!data.hoursPlayed) data.hoursPlayed = 0;
            if(data.status !== "boolean") {data.status = false;}
            if(!data.rating) data.rating = 0;

            const creado = await juegoDAO.crear(data);
            
            return creado;
        } catch(error){
            console.error("Error al crear el juego: ", error);
            throw error;
        }
    }

};

module.exports = juegoBAO;
