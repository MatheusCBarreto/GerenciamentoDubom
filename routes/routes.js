const express = require('express');
const app = express();
const router = express.Router();
const HomeController = require('../controller/HomeController');

router.get('/', HomeController.index);
router.post();
router.put();
router.delete();

module.exports = router;
