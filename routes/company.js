const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company");

router.route("/addcompany").post(companyController.addCompany);
router.route("/getcompanies").get(companyController.getCompanies);
module.exports = router;
