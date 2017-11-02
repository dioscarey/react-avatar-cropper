var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./lib/index.js"]
  },

  output: {
    filename: "ReactAvatarCropper.min.js",
    path: "./dist",
    libraryTarget: "umd",
    library: "ReactAvatarCropper"
  },

  externals: {
    react: "react",
    "react-dom": "react-dom",
    "reactstrap": "reactstrap",
    "prop-types" : "prop-types"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?optional=es7.objectRestSpread"},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ]
};
