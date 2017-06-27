const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5952cec4c9fd8047eb917dd0'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5952cec4c9fd8047eb917dd0').then((todo) => {
  console.log(todo);
});
