const path = require('path');
const CleanPluging = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  //devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  entry: './script.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  //devtool: 'cheap-module-source-map',
  //devtool: 'cheap-source-map',
  devServer: {
    contentBase: './',
  },
  plugins: [new CleanPluging.CleanWebpackPlugin()],
};
