const express = require('express');
const { logWorkout, setGoal } = require('../controllers/workoutController');
const { auth } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/log', auth, logWorkout);

router.post('/goal', auth, setGoal);

module.exports = router;
