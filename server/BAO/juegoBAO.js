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

            data.hoursPlayed = Number(data.hoursPlayed) || 0;
            data.rating = Number(data.rating) || 0;
            data.status = (data.status === true ||  data.status === "true");

            const creado = await juegoDAO.crear(data);
            return creado;

        } catch(error){
            console.error("Error al crear el juego: ", error);
            throw error;
        }
    },

    async editarJuego(id, data){
        try{
            if (!id) throw new Error("El id es requerido");

            if(data.name === "") throw new Error("El nombre es requerido");
            if(data.publisher === "") throw new Error("La publisher es requerida");
            if(data.type === "") throw new Error("El tipo es requerido");

            data.hoursPlayed = Number(data.hoursPlayed) || 0;
            data.rating = Number(data.rating) || 0;
            data.status = (data.status === true || data.status === "true");

            const actualizado = await juegoDAO.actualizar(id, data);
            
            if(!actualizado) throw new Error("El juego no se pudo actualizar");

            return actualizado;
        } catch (error){
            console.error("Error al editar el juego: ", error);
            throw error;
        }
    },

    async eliminarJuego(id){
        return await juegoDAO.eliminar(id);
    }

};

module.exports = juegoBAO;
