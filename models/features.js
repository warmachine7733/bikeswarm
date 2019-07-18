const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const featureSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

const User = mongoose.model("user", featureSchema);
module.exports = User;
