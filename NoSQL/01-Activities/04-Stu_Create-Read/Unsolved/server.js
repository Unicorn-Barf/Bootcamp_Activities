const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb+srv://unicorn:3825myPian0!@cluster0.f16ya0q.mongodb.net/inventoryDB?retryWrites=true&w=majority`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is a route to create a new book document in the the bookCollection
// Responds with the new book
app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// This seeds the database
app.post('/create-many', function (req, res) {
  db.collection('bookCollection').insertMany(
    [
      {"title" : "Oh the Places We Will Go!"},
      {"title" : "Diary of Anne Frank"}
    ], 
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// Finds every entry in the bookCollection and responds with it as a an array 
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
