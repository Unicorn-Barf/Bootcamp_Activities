const path = require('path');

// TODO: Add comment explaining role of route below
// This is exporting this function
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
