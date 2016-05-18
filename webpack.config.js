//setting specific readable variables and importing modules
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  //telling our app where to find our source location
  context: path.join(__dirname, "src"),
  //simple debugging tool
  devtool: debug ? "inline-sourcemap" : null,
  //what file we are looking to compile
  entry: "./js/bundle.js",
  module: {
    //Loaders are transformations that are applied on a resource file of your app.
    loaders: [
      {
        //test jsx means we will be using JSX formatting to deliver our HTML to the browser
        test: /\.jsx?$/,
        //exclude development coponents
        exclude: /(node_modules|bower_components)/,
        //specifies the loader
        loader: 'babel-loader',
        query: {
          //presets query what language version we will be using and framework
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  //output our bundle.js file
  output: {
    //declaring the path
    path: __dirname + "/src/",
    //declaring our output file's name
    filename: "bundle.min.js"
  },
  //plugins for extra cool stuff!
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //uglify plugin
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false, minimize: true }),
  ],
};
