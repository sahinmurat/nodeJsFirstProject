const UserModel = require('../models/User')

exports.get_user =  async (req, res, next) => {
// get users from db
try {
    const userList =  await UserModel.findAll();
    res.render('users',{userList});
     } catch (error) {
    res.send('A fail occured')
    }
  }

  exports.get_add_user = (req,res, next) =>{
    res.render('addUser');
  }