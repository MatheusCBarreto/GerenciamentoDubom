let User = require('../model/User');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

let secretWord = 'sistemaDubom';

class UserController {
  async create(req, res) {
    let { name, email, password } = req.body;

    function isEmail() {
      let emailFormat =
        /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== '' && email.match(emailFormat)) {
        return true;
      }

      return false;
    }
    // substituir o método find pelo findEmail presente no modal User
    let emailAlreadyExist = await User.find({ email: email });
    if (emailAlreadyExist) {
      res.status(406);
      res.json({ errorEmailExist: 'Este email já está cadastrado!' });
    }

    if (!isEmail) {
      res.status(404);
      res.json({
        errorInvalid:
          'Não foi possível criar usuário. Por favor, informe um email válido!',
      });
    }

    await User.createUser(name, email, password);
  }

  async index(req, res) {}

  async login(req, res) {}
}

module.exports = new UserController();
