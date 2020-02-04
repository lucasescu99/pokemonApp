const mongoose = require("mongoose");

var ataquesSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  daño: { type: Number, required: true },
  tipo: { type: String, required: true }
});

const Ataques = mongoose.model("Ataques", ataquesSchema);

module.exports = Ataques;
