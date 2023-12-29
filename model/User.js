let user = require('../database/UserDubom');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let UserDB = mongoose.model('UserDubom', user);

class User {
  async createUser(nome, email, password) {
    try {
      let hash = await bcrypt.hash(password, 15);

      // aqui precisa fazer a criação do usuario no banco de dados
    } catch (err) {
      console.log(err);
    }
  }
  // alterar a conexão com o banco de dados
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
      console.log('Informe um endereço de E-mail válido!');
    }
  }

  async update() {}

  async userDelete(email) {}
}

module.exports = User;
