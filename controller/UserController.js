let User = require('../model/User');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

let secretWord = 'sistemaDubom';

class UserController {
  async create(req, res) {
    let { name, email, password } = req.body;

    function isEmail(email) {
      let emailFormat =
        /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== '' && email.match(emailFormat)) {
        return true;
      }

      return false;
    }

    let emailAlreadyExist = await User.findEmail(email);
    if (emailAlreadyExist) {
      res.status(406);
      res.json({ errorEmailExist: 'Este E-mail já está cadastrado!' });
    }

    if (!isEmail) {
      res.status(404);
      res.json({
        errorInvalid:
          'Não foi possível criar usuário. Por favor, informe um E-mail válido!',
      });
    }

    await User.createUser(name, email, password);
  }

  async index(req, res) {
    let users = await User.allUsers();
    res.json({ users });
  }

  async login(req, res) {
    let { email, password } = req.body;

    let user = await User.dataUser(email);

    if (user != undefined) {
      let operation = await bcrypt.compare(password, user.password);

      if (operation) {
        let token = jwt.sign({ email, role: user.role }, secretWord);
        res.status(200);
        res.json({ token: token });
      } else {
        res.status(406);
        res.json({ error: 'Senha incorreta!' });
      }
    } else {
      res.status(406);
      res.json({ status: false, error: 'O usuário não existe! ' });
    }
  }
}

module.exports = new UserController();
