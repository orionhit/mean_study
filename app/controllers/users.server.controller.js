const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.create = (req, res, next) => {
  let user = new User(req.body);

  user.save((err) => {
    if(err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = (req, res, next) => {
  User.find((err, users)=>{
    if(err){
      return next(err);
    } else {
      res.json(users);
    }
  });
};

exports.read = (req, res) => {
  if(req.user === null) {
    return res.json({"err":"null!!!!"});
  } else {
    res.json(req.user);
  }
};

exports.userById = (req, res, next, id) => {
  User.findOne({_id:id}, (err, user) => {
    if(err){
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id, req.body, (err, user) => {
    if(err){
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.delete = (req, res, next) => {
  req.user.remove((err) => {
    if(err){
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};
