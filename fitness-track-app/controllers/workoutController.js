const Workout = require('../models/Workout.model');
const Goal = require('../models/Goal.model');

// Log a workout
exports.logWorkout = async (req, res) => {
  const { activity, duration } = req.body;
  const workout = new Workout({ userId: req.user.id, activity, duration });
  await workout.save();
  res.status(201).json({ message: 'Workout logged' });
};

// Set a goal
exports.setGoal = async (req, res) => {
  const { type, target } = req.body;
  const goal = new Goal({ userId: req.user.id, type, target });
  await goal.save();
  res.status(201).json({ message: 'Goal set' });
};
