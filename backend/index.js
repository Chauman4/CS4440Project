const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const router = express.Router();
const connection = mongoose.connection;
app.use(cors());

let LATrafficCollisions = require("./model");

mongoose.connect("mongodb://127.0.0.1:27017/LATrafficCollisions", {
    userNewUrlParser: true
});

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

router.route("/getData").get(function(req, res) {
    LATrafficCollisions.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
