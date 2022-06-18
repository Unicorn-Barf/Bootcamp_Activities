// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//  1: if file is not found creates it, if exists will append new content to it
// 2: The content that it will add/append to the file
// 3: a callback function to check for error and do thing after file is created/appended to
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
