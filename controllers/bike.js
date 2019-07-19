const Bike = require("../models/bike");
const Image = require("../models/image");

module.exports = {
  addbike: async (req, res, next) => {
    try {
      let pic = req.file.location;
      let tempBike = { ...req.body, pic };
      let newBike = new Bike(tempBike);
      await newBike.save();
      res.status(200).json("bike added!!");
    } catch (e) {
      res.status(400).json(e);
    }
  }
};
