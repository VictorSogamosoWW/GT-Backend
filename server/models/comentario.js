const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idGame: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comment', ComentarioSchema);
