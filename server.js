const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/src"));
}

const db = require("./config/keys").mongoURI;

// If deployed, use the deployed database. Otherwise use the local Beacon database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Beacon";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Define API routes here

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// app.post("/api/test", (req, res) => {
//   const testName = req.body.testName;

//   db.Test.create({
//     testName: testName
//   })
//     .then(function(test) {
//       console.log(test._id);
//       res.sendStatus(200);
//       console.log("[DEBUG]  WORKING");
//     })
//     .catch(function(err) {
//       console.log(err.message);
//       console.log("[DEBUG] NOT WORKING");

//       res.sendStatus(400);
//     });
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
