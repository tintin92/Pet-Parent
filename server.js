const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const pets = require("./routes/api/pets");


const PORT = process.env.PORT || 3001;

// Body Parser Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petbuild",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// Use Routes
app.use("./api/pets", pets);




app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
