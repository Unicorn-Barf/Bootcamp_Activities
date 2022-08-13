const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // Settings object for the sessions ID cookie, DOCS has default values
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // Caculates the datetime of expiration using a millis value 
    // From when this is first created
    maxAge: 3600,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // Specifies the boolean value for the HttpOnly Set-Cookie attribute. When truthy, the HttpOnly attribute is set, otherwise it is not. By default, the HttpOnly attribute is set.
    // by default this is true
    // This will automatically include the cookie in every request dont on the front-end
    // so that the backend can verify it
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // Requires HTTPS cookie the cookie to be sent to the server
    // False by default
    // XSS attacks - Cross Site Scripting - Someone steals a users cookie from the browser and if they sucessfully do it
    // they can hijack someones session.  When a hacker hijacks a users session they can make API calls on behalf of the user
    // X-CSRF - Cross site forgery - Phishers - They create a phony ass website and they then take the info that we provide
    // and take our info and do malicious things with it

    // localhost is using HTTP
    // HTTPS encrypts the data as it is being sent to servers
    // This cookie will only work if we are in HTTPS website
    secure: false, // process.env.NODE_ENV === 'production'; and set this in Heroku
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // this makes it so that the cookie being used is only coming from our domain/server/site
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
