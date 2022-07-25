// TODO: Import express
const { urlencoded } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');


// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', async (req, res) => {
  const data = await fs.readFile(path.join(__dirname, 'terms.json'), 'utf8', (err, data) => {
    console.log(data);
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
