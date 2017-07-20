const User = require('../model/Users');

let Login = (req,res) =>{
  let data = req.body;
  User.find({ username: data.username }, (err, user) => {
    if (user) {
      console.log(user)
    } else {
      console.log(err)
    }
  });
} 

module.exports = {
  Login
};
