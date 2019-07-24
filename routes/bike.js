const express = require("express");
const router = express.Router();
const bikeController = require("../controllers/bike");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const sharp = require("sharp");

//aws config file
aws.config.update({
  secretAccessKey: process.env.SecretAccessKey,
  accessKeyId: process.env.AccessKeyID
});
const s3 = new aws.S3();
/**local storage */
// const storage = multer.diskStorage({
//   destination: "./public",
//   filename(req, file, cb) {
//     cb(null, `${new Date().getTime()}.${file.originalname.split(".")[0]}.jpg`);
//   }
// });

// const tempStorage = multer.diskStorage({});

/**s3 storage */

const storage = multerS3({
  s3,
  acl: "public-read-write",
  bucket: "mediabikeswarm",
  contentType: multerS3.AUTO_CONTENT_TYPE, //this is preventing from auto downloading
  // key: async (req, file, cb) => {
  //   cb(null, `${Date.now()}.jpg`); //use Date.now() for unique file keys
  // },
  shouldTransform: function(req, file, cb) {
    cb(null, /^image/i.test(file.mimetype));
  },
  transforms: [
    {
      id: "original",
      key: function(req, file, cb) {
        cb(null, "image-original.jpg");
      },
      transform: function(req, file, cb) {
        //Perform desired transformations
        cb(null, sharp().resize(60, 60));
      }
    }
  ]
});

const uploadImg = multer({ storage });

const {
  validateParam,
  validateBody,
  schemas
} = require("../helpers/routeHelpers");

router.route("/addbike").post(
  uploadImg.array("file", 2),
  // validateBody(schemas.bikeSchema),
  bikeController.addbike
);
module.exports = router;
