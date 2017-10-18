const path = require('path');

module.exports = {
  entry: {
    App: "./src/scripts/main.js",
    Vendor: "./src/scripts/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist/scripts/"),
    filename: "[name].js"
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
