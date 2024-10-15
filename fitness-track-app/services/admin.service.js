const User = require('../models/User');
const Program = require('../models/Program');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.createFitnessProgram = async (title, description) => {
  const program = new Program({ title, description });
  await program.save();
  return program;
};

exports.updateProgram = async (id, updates) => {
  return await Program.findByIdAndUpdate(id, updates, { new: true });
};
