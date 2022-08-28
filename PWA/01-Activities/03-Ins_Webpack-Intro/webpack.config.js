const path = require('path');

module.exports = {
  mode: 'development',

  // 2 required keys by webpack config 'entry' and 'output'

  // entry means, where should webpack look first to start building
  // and bundling all of our code
  entry: './src/js/index.js',
  // Once webpack is finished bundling and building our code,
  // what should the name of the file be of our bundled code
  // and where should that file go once it's all finished bundling
  // 'dist' stands for distribution
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
