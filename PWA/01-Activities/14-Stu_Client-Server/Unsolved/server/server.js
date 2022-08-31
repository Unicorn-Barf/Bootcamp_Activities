const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comment on role of code below
// Dictating what directory to serve statically
app.use(express.static('../client/dist'));
// Normal middlewares we need for json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires the htmlRoutes and invoke function with app
// This route sends the html for the root/ url
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
