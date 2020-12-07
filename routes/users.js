var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', userController.get_user);
router.get('/add', userController.get_add_user);

module.exports = router;
