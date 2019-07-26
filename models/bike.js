const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bikeSchema = new Schema({
  views: {
    type: Number,
    required: false,
    default: 0
  },
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  pic: {
    type: [{ url: String }],
    required: false
  },
  thumbnail: {
    type: [{ url: String }],
    required: false,
    lowercase: false
  },
  releaseDate: {
    type: String,
    required: false
  },
  engine: {
    type: Number,
    required: false
  },
  power: {
    type: Number,
    required: false
  },
  torque: {
    type: Number,
    required: false
  },
  brakes: {
    type: String,
    required: false,
    enum: ["dual drum", "dual disc", "rear disc", "front disc"]
  },
  tyreType: {
    type: String,
    required: false,
    enum: ["tubeless", "tube", "rear tubeless", "rear tube"]
  },
  abs: {
    type: String,
    required: false
  },
  millage: {
    type: Number,
    required: false
  },
  passSwitch: {
    type: String,
    required: false
  },
  console: {
    type: String,
    required: false,
    enum: ["digital", "manual", "hybrid"]
  },
  antiTheft: {
    type: String,
    required: false
  },
  stepUpSeat: {
    type: String,
    required: false
  },
  maxSpeed: {
    type: Number,
    required: false
  },
  zeroToSixty: {
    type: Number,
    required: false
  },
  frontSuspension: {
    type: String,
    required: false
  },
  rearSuspension: {
    type: String,
    required: false
  },
  lowFuelIndicator: {
    type: String,
    required: false
  },
  maintenanceIndicator: {
    type: String,
    required: false
  },
  lowBatteryIndicator: {
    type: String,
    required: false
  },
  price: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  }
});

const Bike = mongoose.model("bike", bikeSchema);
module.exports = Bike;
