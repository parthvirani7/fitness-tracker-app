const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET, 
    { expiresIn: '1h' } 
  );
};

exports.verifyCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
};
