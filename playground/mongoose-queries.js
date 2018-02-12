const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// var id = '5a812b249de4541d14b420fc11';

// if(!ObjectID.isValid(id)) {
//     return console.log('ID is not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=> {
//     if(todos.length === 0) {
//     return console.log( 'no Todo found')
// };
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=> {if(!todo) {
//     return console.log( 'Id not found')
// };
//     console.log('Todo: ', todo);
// });

// 

var id = '5a7d6b98268b14e609d39711';

User.findById(id).then ((user) => {
    if (!user) {
        return console.log('User not found')
    };
    console.log(user);
},(e) => {console.log(e)
});