const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password) {
        return password.length >= 8;
      },
      'Password Too Short'
    ]
  },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    index: true
  },
  role: {
    type: String,
    enum: ['Admin','Owner','User']
  },
  webSite: {
    type: String,
    get: (url) => {
      if(!url){
        return url;
      } else {
        if(url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://'+url;
        }
        return url;
      }
    }
  },
  created: {
    type: Date,
    default: Date.now
  }
});


// virtual 함수는 에로우펑션(=>) 안먹힘!
UserSchema.virtual('idpass').get(function(){
  return this.userId+' '+this.password;
});

UserSchema.set('toObject', {getters: true, virtuals: true});
UserSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('User', UserSchema);
