const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(`mongodb+srv://unicorn:3825myPian0!@cluster0.f16ya0q.mongodb.net/aggregateDB2?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
