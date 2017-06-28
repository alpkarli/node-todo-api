const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// var uri = "mongodb://surqurer:qw3r4sdf.@ds139242.mlab.com:39242/todo-app_alperen";
// mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://surqurer:qw3r4sdf.@ds139242.mlab.com:39242/todo-app_alperen');

module.exports = {mongoose};
