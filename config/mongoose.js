const config = require('./config'),
      mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = ()=>{
  const db = mongoose.connect(config.db,{auth:{authdb:"e2haeService"}});

  require('../app/models/user.server.model.js');
  return db;
}
