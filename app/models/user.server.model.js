const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  userId: String,
  password: String,
  email: String
});

mongoose.model('User', UserSchema);
