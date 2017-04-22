const config = require('./config'),
      mongoose = require('mongoose');

module.exports = ()=>{
  const db = mongoose.connect(config.db);

  return db;
}
