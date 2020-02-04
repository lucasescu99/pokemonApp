const AtaquesModel = require("../dbmodels/Ataques");

const ataquesController = {
  findAll(req, res) {
    AtaquesModel.find({})
      .then(ataques => {
        res.send(ataques);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  findById(req, res) {
    AtaquesModel.find({ _id: req.params.id })
      .then(pokemon => {
        res.send(pokemon);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  deleteById(req, res) {
    AtaquesModel.deleteOne({ _id: req.params.id })
      .then(ataque => {
        res.send(ataque);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  createAtaque(req, res) {
    AtaquesModel.create(req.body)
      .then(ataque => {
        res.send(ataque);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  updateById(req, res) {
    AtaquesModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(ataque => {
        res.send(ataque);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};

module.exports = ataquesController;
