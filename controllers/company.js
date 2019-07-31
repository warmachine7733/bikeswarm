const Company = require("../models/company");
module.exports = {
  addCompany: async (req, res, next) => {
    try {
      const { name } = req.body;
      const existsInDb = await Company.find({ name });
      if (existsInDb.length !== 0) {
        throw "company already exists!!";
      } else {
        let newCompany = new Company(req.body);
        await newCompany.save();
        res.status(200).json(newCompany);
      }
    } catch (e) {
      console.log("here");
      res.status(400).json(e);
    }
  },
  getCompanies: async (req, res, next) => {
    try {
      const result = await Company.find({});
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json(e);
    }
  }
};
