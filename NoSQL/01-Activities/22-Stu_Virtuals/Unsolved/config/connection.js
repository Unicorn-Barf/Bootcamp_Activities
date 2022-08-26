const { connect, connection } = require('mongoose');

connect(`mongodb+srv://unicorn:3825myPian0!@cluster0.f16ya0q.mongodb.net/aggregateDB2?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
