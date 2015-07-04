var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()

    // new webpack.optimize.UglifyJsPlugin({
    //     mangle: {
    //         except: ['exports', 'require']
    //     }
    // })
  ]
};
