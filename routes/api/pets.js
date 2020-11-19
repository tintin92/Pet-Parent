const express = require("express");
const router = express.Router();

// Pets Model to make queries i.e save, 
const pets = require("../../models/pets")

// @route GET api/pets
router.get("/", (req, res) => {
  pets.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});
// @route POST api/pets
router.post("/", (req, res) => {
  const newPet = new Pet({
    name: req.body.name
  });
  newPet.save().then(item => res.json(pets));
});
// @route POST api/pets
router.post("/", (req, res) => {
  const newPet = new Pet({
    name: req.body.name
  });
  newPet.save().then(item => res.json(pets));
});
// const petsController = require("../../controllers/petsController");


// Matches with "/api/pets"
// router.get("/")
//   .get(petsController.findAll)
//   .post(petsController.create);

// Matches with "/api/pets/:id"
// router
//   .route("/:id")
//   .get(petsController.findById)
//   .put(petsController.update)
//   .delete(petsController.remove);


// router.post("/", (req, res) => {
//   const newPet = new Pet({
//     name: req.body.name
//   });

//   newPet.save().then(item => res.json(item));
// });


module.exports = router;