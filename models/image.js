const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new Schema({
  img_url: String
});

const Image = mongoose.model("images", imageSchema);
module.exports = Image;