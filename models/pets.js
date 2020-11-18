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

  birthday: {
    type: Date,
  },

  species: {
    type: String,
    trim: true,
    required: "i.e. cat, dog, bird.."
  },

  breed: {
    type: String,
    required: "i.e. Labrador, Domestic short hair, African Grey.."
  },

  weight: {
    type: Number,
  },

  location: {
    type: String,
    trim: true,
  },

  // allergy: Boolean, // if true then add specific allergy

  // vaccine: {
  //   type: String,
  //   trim: true,
  //   required: "Please least most up-to-date vaccines if any"
  // },

  // chip: {
  //   type: Number,
  //   unique: true,
  //   required: true
  // }
});
// We are classes in Mongoose right here

const Pet = mongoose.model("Pet", PetProfileSchema);

module.exports = Pet;
