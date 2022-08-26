const express = require('express');
const db = require('./config/connection');
// Require model
const { Item } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/sum-price', (req, res) => {
  // Call aggregate() on model
  Item.aggregate(
    [
      // Where prices are less or equal to 5
      { $match: { price: { $lte: 5 } } },
      // Once match is hit
      // imagine that we already have access to the data from the match statement

      // in any stage except $match we can access the actual data in the fields
      // using "variables" in the aggregation pipeline
      // and the way that we do that is we pass a string with $nameOfField
      // and that will give us the value per document for that field
      {
        $group: {
          // Group by null (no additional grouping by id)
          _id: null,
          // Sum of all prices
          sum_price: { $sum: '$price' },
          // Average of all prices
          avg_price: { $avg: '$price' },
          // Maximum price
          max_price: { $max: '$price' },
          // Minimum price
          min_price: { $min: '$price' },
        },
      },
    ],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
