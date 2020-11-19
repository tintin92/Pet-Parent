const express = require("express");
const router = express.Router();

// Pets Model
const Item = require("../../models/pets")
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.get("/")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/pets/:id"
router
  .route("/:id")
  .get(petsController.findById)
  .put(petsController.update)
  .delete(petsController.remove);

module.exports = router;