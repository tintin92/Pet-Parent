const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String },
  breed: { type: String },
  age: { type: Number },
  date: { type: Date, deafult: Date.now }
  //going to add more in future. 
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
