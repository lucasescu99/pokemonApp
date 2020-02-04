const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var pokemonSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  level: { type: Number, required: true },
  imgURI: { type: String, required: true },
  ataques: [{ type: Schema.Types.ObjectId, ref: "Ataques", required: true }]
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
