// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connetct to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

//deleteMany

// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
//     console.log(result)
// });

//deleteOne

// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=> {
//     console.log(result);
// })

//findOnendDelete
   
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
//     console.log(result);
// });


//challenge
// db.collection('Users').deleteMany({name:'Leanne'}).then((result)=> {
//     console.log(result);
// })
db.collection('Users').findOneAndDelet({_id: new ObjectID('5a7ab8f550635b0e9a08de0b')}).then((result) => {
    console.log(result);
});
    // db.close();
});