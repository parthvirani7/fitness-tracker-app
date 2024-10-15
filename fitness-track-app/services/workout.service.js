const Workout = require('../models/Workout');
const Goal = require('../models/Goal');

exports.createWorkoutLog = async (userId, activity, duration) => {
  const workout = new Workout({ userId, activity, duration });
  await workout.save();
  return workout;
};

exports.setUserGoal = async (userId, type, target) => {
  const goal = new Goal({ userId, type, target });
  await goal.save();
  return goal;
};
