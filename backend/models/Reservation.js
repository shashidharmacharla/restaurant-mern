// models/Reservation.js

const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Storing time as string e.g., "18:30"
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
  },
  message: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

module.exports = mongoose.model("Reservation", reservationSchema);

