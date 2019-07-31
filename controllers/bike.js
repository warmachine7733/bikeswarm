const Bike = require("../models/bike");
const Company = require("../models/company");

module.exports = {
  addbike: async (req, res, next) => {
    try {
      //finding the company5d413e89375e0b3294ff68a5

      const company = await Company.findById(req.body.company);
      console.log("company", company);
      let pic = [];
      // console.log("files", req.files);
      req.files.map(each => pic.push({ url: each.path })); //each.path for local ,each.location for aws s3
      // console.log(pic);
      let tempBike = { ...req.body, pic };
      let newBike = new Bike(tempBike);
      await newBike.save();

      //adding bike company relationship
      company.bikes.push(newBike);

      await company.save();
      res.status(200).json("saved!!");
    } catch (e) {
      res.status(400).json(e);
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
