const path = require('path');


module.exports = {
  entry: './client/index.jsx', 
  output: {
    path: path.resolve(__dirname, 'client/dist'),
	filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
              	loader: 'babel-loader'
        }
      }
    ]
  }
};