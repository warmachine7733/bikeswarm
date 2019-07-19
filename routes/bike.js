const express = require("express");
const router = express.Router();
const bikeController = require("../controllers/bike");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");

//aws config file
aws.config.update({
  secretAccessKey: process.env.SecretAccessKey,
  accessKeyId: process.env.AccessKeyID
});
const s3 = new aws.S3();
/**local storage */
const storage = multer.diskStorage({
  destination: "./public/fullsize",
  filename(req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname.split(".")[1]}`)
  },
});

const tempStorage = multer.diskStorage({
 
});

/**s3 storage */

// const storage = multerS3({
//   s3,
//   acl: "public-read-write",
//   bucket: "mediabikeswarm",
//   contentType: multerS3.AUTO_CONTENT_TYPE, //this is preventing from auto downloading
//   key: function(req, file, cb) {
//     console.log(file);
//     cb(null, `${Date.now()}.${file.originalname.split(".")[1]}`); //use Date.now() for unique file keys
//   }
// });

const uploadImg = multer({ storage });

const {
  validateParam,
  validateBody,
  schemas
} = require("../helpers/routeHelpers");

router.route("/addbike").post(
  uploadImg.single("file"),
  // validateBody(schemas.bikeSchema),
  bikeController.addbike
);
module.exports = router;
