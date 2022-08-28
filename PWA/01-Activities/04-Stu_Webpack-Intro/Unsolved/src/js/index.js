// TODO: Add a comment explaining role of the index.js file and import statements

// This is the entry js file defined in the webpack.config.js

// Importing dependencies from other js files
// We have a boxClick and headerClick functions for event handlers

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
