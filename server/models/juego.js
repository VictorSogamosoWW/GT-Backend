const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  plataforma: { type: String, required: true },
  horasJugadas: { type: Number, default: 0 },
  completado: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Juego', juegoSchema, 'juegos');