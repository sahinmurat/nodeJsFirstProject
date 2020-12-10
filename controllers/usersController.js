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

  exports.get_add_user_post =  async (req, res, next) => {
    // get users from db

    try {
        const newUser = await UserModel.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        })
        const userList =  await UserModel.findAll();
        // res.render('index');
        res.redirect('/users')
         } catch (error) {
        res.send('A fail occured')
        }
      }

      exports.delete_user = async (req, res) =>{

        try {
          await UserModel.destroy({
            where:{
              id : req.params.id
            }
          })
        
          res.redirect('/users')
        } catch (error) {
          
        }
      }
      exports.edit_user =  async (req, res) =>{
        const userList =  await UserModel.findAll();
       res.render('changeUser',{userList,id:req.params.id})
      }

      // exports.edit_2_user = async (req, res) =>{
      //   try {
      //     await UserModel.destroy({
      //       where:{
      //         id : req.params.id
      //       }
      //     })
      //     // res.send('/users')
      //   } catch (error) {
      //     res.send('ilk adim hatasi')
      //   }
      //   try {
      //     const newUser = await UserModel.create({
      //       firstName: req.body.firstName,
      //       lastName: req.body.lastName,
      //     })
      //     const userList =  await UserModel.findAll();
      //     // res.render('index');
      //     res.redirect('/users')
      //      } catch (error) {
      //     res.send('ikinci adim hatasi')
      //     }
      // }
     
      exports.edit_2_user = async (req, res) => {
        try {
          await UserModel.update(
            {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            },
            {where: {
              id: req.params.id,
            }}
          );
          res.redirect("/users");
        } catch (error) {
          console.log("error",error);
        }
      }
      
      // update({firstName: req.body.first_name}, {where: { id: req.params.id} 
     