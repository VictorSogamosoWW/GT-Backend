const mongoose = require("mongoose");

const uri = "mongodb+srv://data_walter:W4lt3r12345@cluster0.quzgdbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function conectarDB(){
    try{
        await mongoose.connect(uri);
        console.log("Conexión exitosa a GT-Walter");

    } catch (error) {
        console.error("Error al conectar a GT-Walter:", error);
    }
}

module.exports = conectarDB