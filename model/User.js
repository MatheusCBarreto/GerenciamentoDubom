let user = require('../model/User');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let UserDB = mongoose.model('User', user);

class User {
  async createUser(nome, email, password) {
    try {
      let hash = await bcrypt.hash(password, 15);
    } catch (err) {
      console.log(err);
    }
  }

  async findByEmail(email) {
    if (email != undefined) {
      try {
        let result = await knex
          .select('*')
          .from('users')
          .where({ email: email });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Informe um endereço válido!');
    }
  }
}

module.exports = User;
