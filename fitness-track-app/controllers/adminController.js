const User = require('../models/User.model');
const Program = require('../models/programs.model'); 

// Get all users (Admin only)
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create a new fitness program (Admin only)
exports.createProgram = async (req, res) => {
  const { title, description } = req.body;
  const program = new Program({ title, description });
  await program.save();
  res.status(201).json({ message: 'Fitness program created' });
};

// Manage existing fitness programs (Admin only)
exports.manageProgram = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const program = await Program.findById(id);
  
  if (!program) return res.status(404).json({ message: 'Program not found' });
  
  program.title = title || program.title;
  program.description = description || program.description;
  await program.save();
  
  res.json({ message: 'Program updated' });
};
