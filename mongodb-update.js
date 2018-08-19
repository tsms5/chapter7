const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    db.collection('Users')
        .findOneAndUpdate({ _id: new ObjectID("5b7926016ba3acfd89cc9eb9") },
            {
                $set: {
                    name: "Mark",
                },
                $inc: {
                    age: 1
                }
            }, { returnOriginal: false })
        .then((res) => {
            console.log(res);
        });

    client.close();
});