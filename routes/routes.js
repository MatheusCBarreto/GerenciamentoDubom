const express = require('express');
const app = express();
const router = express.Router();
const HomeController = require('../controller/HomeController');
const UserController = require('../controller/UserController');

router.get('/', HomeController.index);
router.post('/cadastro', UserController.create);
// router.post();
// router.put();
// router.delete();

module.exports = router;
