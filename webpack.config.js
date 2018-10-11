const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/pokedex.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      Util: path.resolve(__dirname, 'frontend', 'util'),
      Actions: path.resolve(__dirname, 'frontend', 'actions'),
      Components: path.resolve(__dirname, 'frontend', 'components'),
      Reducers: path.resolve(__dirname, 'frontend', 'reducers'),
      Store: path.resolve(__dirname, 'frontend', 'store'),
      Middleware: path.resolve(__dirname, 'frontend', 'middleware')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
     },
    ]
  },
  devtool: 'source-map'
};