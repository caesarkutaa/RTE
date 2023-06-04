const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const connect = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("An error occurred while connecting to MongoDB");
    console.log(err);
  });
};

module.exports = { connect };
