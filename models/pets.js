const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const petProfileSchema = new Schema(
  {
    day: {
      Date,
      default: () => new Date()
    },
    pets: [
      {
        petName: {
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
        allergy: {
          type: String,
          trim: true,
          required: "Does your pet have any known allergies"
        },
        vaccine: {
          type: String,
          trim: true,
          required: "Please least most up-to-date vaccines if any"
        },
        chipNum: {
          type: Number,
        }
      }
    ]
  }
);
// We are classes in Mongoose right here

const Pet = mongoose.model("Pet", petProfileSchema);

module.exports = Workout;
