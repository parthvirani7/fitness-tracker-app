const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Goal' }]
});

module.exports = mongoose.model('User', userSchema);
