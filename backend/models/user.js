const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    index: {
      unique: true
    }
  },
  password: {
    type: String
  }
});

// Hashing password as long that it's modified or new
UserSchema.pre('save', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else return next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
