// routes/reservationRoutes.js

const express = require("express");
const router = express.Router();

const {
  createReservation,
  getReservations,
} = require("../controllers/reservationController");

// POST /api/reservations - Create a new reservation
router.post("/", createReservation);

// GET /api/reservations - Get all reservations (optional, can be removed in production)
router.get("/", getReservations);

module.exports = router;

