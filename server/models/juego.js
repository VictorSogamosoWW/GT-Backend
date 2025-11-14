const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  publisher:  { type: String, required: true },
  type:       { type: String, required: true },
  imagen:     { type: String, default: "" },
  hoursPlayed:{ type: Number, default: 0 },
  status:     { type: Boolean, default: false },
  rating:     { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Juego', juegoSchema, 'game');