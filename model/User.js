let user = require('../database/UserDubom');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let Userdb = mongoose.model('UserDubom', user);

class User {
  async createUser(name, email, password) {
    try {
      let hash = await bcrypt.hash(password, 15);

      const newUser = new Userdb({
        name,
        email,
        password: hash,
      });

      newUser.save();
    } catch (err) {
      console.log(err);
    }
  }
  // criar a lógica para buscar um usuário com base no email
  // usar o método find do mongo
  async findEmail(email) {
    if (email == undefined) {
      res.status(404);
      res.send('Email n');
      return;
    }
  }

  async update() {}

  async userDelete(email) {}
}

module.exports = User;
