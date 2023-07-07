const mongoose = require("mongoose");

const userScheama = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    warehouse: {
      type: [String],
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Users", userScheama);
