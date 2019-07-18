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
    type: String,
    required: false,
    lowercase: true
  },
  releaseDate: {
    type: Date,
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
    enum: ["dual drum", "dual disc", "rear disc only", "front disc only"]
  },
  tyreType: {
    type: String,
    required: false,
    enum: ["tubeless", "tube"]
  },
  abs: {
    type: Boolean,
    required: false
  },
  millage: {
    type: Number,
    required: false
  },
  passSwitch: {
    type: Boolean,
    required: false
  },
  console: {
    type: String,
    required: false,
    enum: ["Digital", "Manual", "Hybrid"]
  },
  antiTheft: {
    type: Boolean,
    required: false
  },
  stepUpSeat: {
    type: Boolean,
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
    type: Boolean,
    required: false
  },
  maintenanceIndicator: {
    type: Boolean,
    required: false
  },
  lowBatteryIndicator: {
    type: Boolean,
    required: false
  },
  price: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  }
});

const Bike = mongoose.model("bike", bikeSchema);
module.exports = Bike;
