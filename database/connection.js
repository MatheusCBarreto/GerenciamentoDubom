let mongoose = require('mongoose');

const UserDB = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

module.exports = UserDB;
