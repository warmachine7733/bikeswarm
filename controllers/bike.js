const Bike = require("../models/bike");
const Image = require("../models/image");

module.exports = {
  addbike: async (req, res, next) => {
    try {
      let pic = req.file.filename;
      console.log(req.body);
      let tempBike = { ...req.body, pic };
      console.log(tempBike);

      let newBike = new Bike(tempBike);
      await newBike.save();
      console.log(newBike);

      res.status(200).json("bike added!!");
    } catch (e) {
      res.status(400).json(e);
    }
  },
  uploadImg: async (req, res, next) => {
    try {
    } catch (err) {
      res.status(400).json(err);
    }
  }
};
