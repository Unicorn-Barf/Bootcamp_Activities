// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// setting up extra config that we might want to add for handlebars
// empty is default settings
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// Creates a super simple Express app which shows the basic way to register a Handlebars view engine using this package.
// Setting up a basic express handlebars app by using the config that we mentioned on line 7
// Helps with express knowing that when we call res.render, look for a .hbs or .handlebars extension
app.engine('handlebars', hbs.engine);
// Express when we call res.render, we mean to use a handlebars template
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
