const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const companySchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: true
  },
  bikes: [{
    type:Schema.Types.ObjectId,
    ref:'bike'
}],
  logo: { type: String, required: false }
});
const company = mongoose.model("company", companySchema);
module.exports = company;
