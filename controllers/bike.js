const Bike = require("../models/bike");
const Image = require("../models/image");

module.exports = {
  addbike: async (req, res, next) => {
    try {
      // let pic = req.file.location;
      // let pic = [];
      console.log(req.files);
      // req.files.map(each => pic.push({ url: each.location })); //each.path for local ,each.location for aws s3
      // console.log(pic);
      // let tempBike = { ...req.body, pic };
      // let newBike = new Bike(tempBike);
      // await newBike.save();
      res.status(200).json("lll");
    } catch (e) {
      res.status(400).json(e);
    }
  }
};
