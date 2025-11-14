require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Juego = require('./models/juego');

const uri = process.env.MONGO_URI;

async function probarInsercion() {
  try {
    await mongoose.connect(uri);
    console.log('✅ Conectado a MongoDB');

    const nuevoJuego = new Juego({
      nombre: 'The Legend of Zelda: Breath of the Wild',
      plataforma: 'Nintendo Switch',
      horasJugadas: 120,
      completado: true
    });

    const resultado = await nuevoJuego.save();
    console.log('🎮 Juego insertado correctamente:', resultado);
  } catch (error) {
    console.error('❌ Error al insertar el juego:', error);
  } finally {
    await mongoose.disconnect();
  }
}

probarInsercion();