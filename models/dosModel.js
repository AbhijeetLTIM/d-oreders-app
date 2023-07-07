const mongoose = require("mongoose");

const dosScheama = mongoose.Schema(
  {
    doNumber: {
      type: Number,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    doType: {
      type: String,
      required: true,
    },
    fromWarehouse: {
      type: String,
      required: true,
    },
    toWarehouse: {
      type: String,
      required: true,
    },
    reasonCode: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("orders", dosScheama);

