const express = require("express");
const router = express.Router();
const PokemonController = require("../controllers/pokemon");

router.get("/", PokemonController.findAll);
router.post("/", PokemonController.createPokemon);
router.get("/:id", PokemonController.findById);
router.delete("/all", PokemonController.deleteAll);
router.delete("/:id", PokemonController.deleteById);
router.put("/:id", PokemonController.updateById);
module.exports = router;
