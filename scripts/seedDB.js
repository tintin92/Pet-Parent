const mongoose = require("mongoose");
const db = require("../models");

// Empty the pets collection and inserts the pets attrbs below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pets", {
    useNewUrlParser: true,
    useFindAndModify: false
  });

const petProfileSeed = [
  {
    pets: [
      {
        petName: "Lucy",
        age: 6,
        weight: 100,
        food: "Pedigree",
        weight: "20",
        allergy: "wheat",
        vaccine: "Up to Date",
        chipNumber: "34567"
      }
    ]
  }
];



db.Pet.remove({})
  .then(() => db.Pet.collection.insertMany(petProfileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
