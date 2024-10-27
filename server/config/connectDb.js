const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harshads569:GSfpVcas80dLyCiw@admindashboard1.8elkh.mongodb.net/admindashboard"
    );
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
