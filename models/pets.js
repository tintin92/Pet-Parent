const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petsSchema = new Schema({
  name: { type: String },
  breed: { type: String },
  age: { type: Number },
  date: { type: Date, deafult: Date.now }
  //going to add more in future. 
});

const Pets = mongoose.model("Pets", petsSchema);

module.exports = Pets;
