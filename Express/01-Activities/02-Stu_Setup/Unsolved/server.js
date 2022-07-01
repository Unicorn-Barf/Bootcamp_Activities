const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;
const team = require("./team.js");
// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) => {  res.sendFile(path.join(__dirname, 'public/send.html'))
});



// TODO: Create a route that will serve up the `public/paths.html` page
app.get('/paths', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'paths.html'));
});


// Super wildcard character
// In case hit any routes that haven't been declared, send this instead
app.get("*", (req, res) => {
  console.log("bad route")
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

