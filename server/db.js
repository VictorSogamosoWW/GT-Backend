require('dotenv').config("../.env");
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

async function conectarDB(){
    try{
        await mongoose.connect(uri);
        console.log("Conexión exitosa a GT-Walter");

    } catch (error) {
        console.error("Error al conectar a GT-Walter:", error);
    }
}

module.exports = conectarDB