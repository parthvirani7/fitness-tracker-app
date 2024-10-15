const express = require("express");
const { auth, adminAuth } = require("../middleware/authMiddleware");
const {
  getUsers,
  createProgram,
  manageProgram,
} = require("../controllers/adminController");

const router = express.Router();

// Admin routes (protected)

// Admin-only: View all users
router.get("/users", auth, adminAuth, getUsers);

// Admin: Create a fitness program
router.post("/program", auth, adminAuth, createProgram);

// Admin: Update a fitness program
router.put("/program/:id", auth, adminAuth, manageProgram);

module.exports = router;
