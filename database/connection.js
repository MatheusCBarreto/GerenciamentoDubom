let mongoose = require('mongoose');

const UserDubom = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

module.exports = UserDubom;
