const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: String,
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  bookIds: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const myLibrary = new Library(
  {
    name: 'Such As',
    bookIds: [
      {
        title: 'One Flew Over the Cuckoos Nest',
      },
      {
        title: 'Rage',
      },
      {
        title: 'Gone with the Wind',
      },
    ]
  });

console.log(myLibrary);

module.exports = Library;
