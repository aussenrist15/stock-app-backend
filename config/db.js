const mongoose = require("mongoose");

const connectDB = async () => {
  // try {
  //   const conn = await mongoose.connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log(`Mongo DB connected : ${conn.connection.host}`);
  // } catch (err) {
  //   console.log(err);
  // }
};

module.exports = connectDB;
