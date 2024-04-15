const path = require('path');
module.exports = {
  // Entry point for webpack to start bundling
  entry: './js/app.js',
  // Output configuration
  output: {
    // Output directory
    path: path.resolve(__dirname, 'dist'),
    // Output filename
    filename: 'bundle.js',
  },
  mode: 'none',
};
