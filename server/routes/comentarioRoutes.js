const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/", commentController.crearComentario);
router.get("/:idGame", commentController.obtenerComentarios);

module.exports = router;