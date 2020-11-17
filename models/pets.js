const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PetProfileSchema = new Schema( {
  
  name: {
    type: String,
    trim: true,
    required: "Enter your pets name"
  },

  age: {
    type: Number,
  },

  food: {
    type: String,
    required: "What brand"
  },

  weight: {
    type: Number,
  },

  allergy: Boolean, // if true then add specific allergy

  vaccine: {
    type: String,
    trim: true,
    required: "Please least most up-to-date vaccines if any"
  },

  chip: {
    type: Number,
    unique: true,
    required: true
  }
});
// We are classes in Mongoose right here

const Pet = mongoose.model("Pet", PetProfileSchema);

module.exports = Pet;
