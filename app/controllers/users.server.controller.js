const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const User = mongoose.model('User');

exports.create = (req, res, next) => {
  console.log(req.body);

  user.save((err) => {
    if(err) {
      return next(err);
    } else {
      res.json(user);
    };
  });
};

exports.list = (req, res, next)=>{
  User.find((err, users)=>{
    if(err){
      return next(err);
    } else {
      res.json(users);
    };
  });
}
