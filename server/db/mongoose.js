const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// var uri = "mongodb://surqurer:qw3r4sdf.@ds139242.mlab.com:39242/todo-app_alperen";
mongoose.connect('mongodb://surqurer:qw3r4sdf.@ds139242.mlab.com:39242/todo-app_alperen' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
