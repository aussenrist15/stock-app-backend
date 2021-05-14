const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://database:27017/data", {
      user: "root",
      pass: "password",
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB connected : ${conn.connection.host}`);
  } catch (err) {
    console.log("Error bro");
  }
};

module.exports = connectDB;
