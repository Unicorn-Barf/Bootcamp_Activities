const express = require('express');
const mongodb = require('mongodb').MongoClient;
// We import the ObjectId() function from MongoDB
const ObjectId = require('mongodb').ObjectId;

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

app.post('/create', (req, res) => {
  // The title and author will be provided by the request body
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// TODO: Add Delete route that uses a filter to delete a single document by id
app.delete('/:bookId', async (req, res) => {

  try {
    const result = await db.collection('bookCollection')
    .deleteOne(
      {
        _id: ObjectId(req.params.bookId),
      }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({error});
  };
});
