const express = require("express");
const router = express.Router();
const bikeController = require("../controllers/bike");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./public",
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}.${file.originalname.split(".")[1]}`);
  }
});
const uploadImg = multer({ storage });

const {
  validateParam,
  validateBody,
  schemas
} = require("../helpers/routeHelpers");

// router
//   .route("/addbike")
//   .post(uploadImg.single("image"), bikeController.addbike);

router.route("/addbike").post(
  uploadImg.single("file"),
  // validateBody(schemas.bikeSchema),
  bikeController.addbike
);
module.exports = router;
