// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Posts collection and inserts the books below

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// const profileSeed = [
//   {
//     name: "",
//     age: "",
//     birthday: "",
//     species: "",
//     breed: "",
//     weight: "",
//     location: ""
//   }
// ];

// db.Post.remove({})
//   .then(() => db.Post.collection.insertMany(profileSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });