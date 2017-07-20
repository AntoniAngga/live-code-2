const User = require('../model/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let Login = (req,res) =>{
  let data = req.body;
  User.find({ username: data.username }, (err, user) => {
    if (user) {
      if (user.length > 0 ) {
        let password_decode = bcrypt.compareSync(data.password, user[0].password);
        if (password_decode) {
          let token = jwt.sign({ name: user[0].name}, 'secret');
          res.status(200).send(token);
        } else {
          res.status(503).send('Sorry Password Wrong');
        }
      } else {
        res.status(503).send('Sorry Username Wrong');
      }
    } else {
      res.status(501).send('Something wrong with your login',err);
    }
  });
} 

module.exports = {
  Login
};
