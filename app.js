const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
const helmet = require("helmet");

const url = "mongodb://localhost:27017/bikespoint";
const opts = { useNewUrlParser: true, useCreateIndex: true };
console.log("url is", url);
mongoose.connect(url, opts);

//for .env file read
require("dotenv").config();

const app = express();
app.use(helmet());

//serving static files
app.use(express.static("public"));
//cors

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//getting routes

const home = require("./routes/home");
const bike = require("./routes/bike");
const company = require("./routes/company");

//middlewares
app.use(logger("dev"));
app.use(bodyParser.json());

//using routes
app.use("/home", home);
app.use("/bike", bike);
app.use("/company", company)

//catch 404 error and forward to error handler function
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// //error handler function
// app.use((req, res, err, next) => {
//   const error = err;
//   if(err){
//     console.log("error")

//   }
//    res.sendStatus(404).json(err)
//   console.log("error is", error);
// });

//error handler function
app.use((req, res, err, next) => {
  const error = app.get("env") === "developement" ? err : {};
  const status = err.status || status;

  //client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  console.log(err);
});

//server
//console.log(process.env)
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is running at ${port}`));
