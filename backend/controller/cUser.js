const User = require('../model/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let CreateUser = (req,res) =>{
  let data = req.body;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(data.password, salt);
  
  let newUser = User({
    username: data.username,
    password: hash,
    name: data.name
  })
  
  newUser.save((err,result)=>{
    if (err) {
      res.status(501).send('error because wrong insert User',err)
    } else {
      res.status(200).send(result)
    }
  })
}


module.exports = {
  CreateUser
};