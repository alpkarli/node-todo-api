const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }//,
  // password: {
  //   type: Boolean,
  //   default: false
  // }
});

module.exports = {User};
