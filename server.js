const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pets",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
