var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'app.js',
    path: PUBLIC_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: /client/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
};