const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    db.collection('Users')
    .find({name: 'Mark'})
    .count()
    .then((count)=>{
        console.log('TODOS');
        console.log('Count:', count);
    }).catch((err)=>{
        console.log('unable to fecth data');
    });

    client.close();
});