var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', userController.get_user);
router.get('/add', userController.get_add_user);
router.get('/:id/delete', userController.delete_user);
router.get('/:id/edit', userController.edit_user);
router.post('/:id/change', userController.edit_2_user);


router.post('/add', userController.get_add_user_post);
module.exports = router;
