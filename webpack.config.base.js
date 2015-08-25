module.exports = {

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  output: {
    library: 'Thumbnail',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
