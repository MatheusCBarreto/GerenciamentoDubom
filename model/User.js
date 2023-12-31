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
    try {
      let resultEmail = await Userdb.findOne({ email: email });
      if (resultEmail != undefined) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  // esta função deve retornar todos os dados do usuário a função find deve ser substituida no método update abaixo
  async dataUser(name, email, role) {}

  async update(name, email, role) {
    let userNewData = {};

    try {
      let result = await Userdb.find({ email: email });
      if (result != undefined) {
        if (email != Userdb.email) {
          userNewData = email;
        }
      } else {
        console.log('Erro interno!');
      }

      if (name != undefined || name != Userdb.name) {
        userNewData = name;
      } else {
        console.log('Erro interno!');
      }

      if (role != undefined || role != Userdb.role) {
        userNewData = role;
      } else {
        console.log('Erro interno!');
      }
      await Userdb.update(userNewData);
    } catch (err) {
      console.log(err);
    }
  }

  async userDelete(email) {}
}

module.exports = User;
