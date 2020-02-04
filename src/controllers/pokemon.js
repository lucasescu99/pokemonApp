const PokemonModel = require("../dbmodels/pokemon");

const pokemonController = {
  findAll(req, res) {
    PokemonModel.find({})
      .populate("ataques")
      .then(pokemons => {
        res.send(pokemons);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  findById(req, res) {
    PokemonModel.find({ _id: req.params.id })
      .populate("ataques")
      .then(pokemon => {
        res.send(pokemon[0]);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteById(req, res) {
    PokemonModel.deleteOne({ _id: req.params.id })
      .then(pokemon => {
        res.send(pokemon);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  createPokemon(req, res) {
    PokemonModel.create(req.body)
      .then(pokemon => {
        res.send(pokemon);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  updateById(req, res) {
    PokemonModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(pokemon => {
        res.send(pokemon);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteAll(req, res) {
    PokemonModel.deleteMany({})
      .then(() => res.send("eliminaste todo"))
      .catch(res.send);
  }
};

module.exports = pokemonController;
