const express = require("express");
const router = express.Router();
const AtaquesController = require("../controllers/ataques");

router.get("/", AtaquesController.findAll);
router.post("/", AtaquesController.createAtaque);
router.get("/:id", AtaquesController.findById);
router.delete("/:id", AtaquesController.deleteById);
router.put("/:id", AtaquesController.updateById);

module.exports = router;
