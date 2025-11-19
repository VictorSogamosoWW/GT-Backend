const express = require("express");
const router = express.Router();
const comentarioController = require("../controllers/comentarioCOntroller.js");

router.post("/", comentarioController.crearComentario);
router.get("/:idGame", comentarioController.obtenerComentarios);

module.exports = router;