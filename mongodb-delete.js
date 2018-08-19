const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b792d9a6ba3acfd89cca081')}).then((result)=>{
        console.log(result);
    });



    client.close();
});