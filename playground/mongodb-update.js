// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connetct to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a7ac8bbefaa9becadd305bc')
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }, {
    // returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
 
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a7ab8f550635b0e9a08de0b')
    },{
        $set: {
            name: 'Leanne'
        
        }
        ,$inc: {
            age: 1
        }
    },{
        returnOriginal:false

    }).then ((result) => {
        console.log(result);
    });


    // db.close();
});