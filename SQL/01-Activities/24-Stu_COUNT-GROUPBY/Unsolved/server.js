const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Returns array of objects for each grouped Data + the aggregated columns per grouped data
// Counting the ammount of different books that are in stock and out of stock
// grouping by in_stock value, true or false
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

// Returns array of objects
// Adds the quantity of books grouped by section
// MAX(quantity) quantity of one individual book in this section
// MIN(quantity) Provides min quantity of one individual book in this section
// AVG(quantity) Looks at the grouped values and gets average
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
