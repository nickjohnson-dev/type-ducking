const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: 'public',
    filename: 'bundle.js',
  },
  devServer: {
    stats: {
      chunks: false,
    },
    contentBase: 'public',
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader: 'awesome-typescript',
      },
    ],
  },
};
