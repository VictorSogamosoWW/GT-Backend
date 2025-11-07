const Juego = require('../models/juego');

const juegoDAO = {
    crear: async function (data) {
        await Juego.create(data);
    },
    obtenerTodos: async () => await Juego.find(),
    actualizar: async (id, data) => await Juego.findByIdAndUpdate(id, data, {new: true}),
    eliminar: async (id) => await Juego.findByIdAndDelete(id),
}

export default juegoDAO;