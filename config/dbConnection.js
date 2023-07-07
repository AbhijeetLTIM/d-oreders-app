const mongoose = require("mongoose");

const connectDb = async() => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    console.log(
      "Connected to DB on port : ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("DB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDb;
