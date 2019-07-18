const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const priceSchema = new Schema({
  city: {
    type: Array,
    required: true
  },
  value: {
    type: Array,
    required: true
  }
});

const Price = mongoose.model("prices", priceSchema);
module.exports = Price;
