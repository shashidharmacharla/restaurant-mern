// controllers/reservationController.js

const Reservation = require("../models/Reservation");

// Create a new reservation
const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, message } = req.body;

    // Basic validation
    if (!name || !email || !date || !time || !guests) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      guests,
      message,
    });

    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

// Get all reservations (optional, for admin or testing)
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1, time: 1 });
    res.json(reservations);
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

module.exports = {
  createReservation,
  getReservations,
};
