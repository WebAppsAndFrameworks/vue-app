var path = require('path');
var BrowserSync = require('browser-sync-webpack-plugin');

const projectRoot = path.resolve(__dirname, 'app');

var config = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'app.js'
  },
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
    }),
  ],
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      { 
        test: /\.json$/,
        loader: 'json-loader' },
      {
        test: /\.(html|webmanifest|te?xt)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./app'
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader', 'svg-loader']
      },
      {
        test: /\.(?:eot|ttf|woff)$/,
        loaders: ['url-loader']
      }
    ]
  },
};

module.exports = config;
