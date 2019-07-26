const Bike = require("../models/bike");
const Image = require("../models/image");

module.exports = {
  addbike: async (req, res, next) => {
    try {
      let pic = [];
      // console.log("files", req.files);
      req.files.map(each => pic.push({ url: each.path })); //each.path for local ,each.location for aws s3
      // console.log(pic);
      let tempBike = { ...req.body, pic };
      let newBike = new Bike(tempBike);
      await newBike.save();
      res.status(200).json("saved!!");
    } catch (e) {
      res.status(e.status).json(e);
    }
  },
  getBikeImage: async (req, res, next) => {
    try {
      console.log("req.params", req.params);
      let x = req.params;
      const result = await Bike.find(req.params);
      console.log("res", result);
      res.status(200).json(result);
    } catch (e) {
      res.status(404).json(e);
    }
  }
};
