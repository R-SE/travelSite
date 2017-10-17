const path = require('path');

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/scripts/"),
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
