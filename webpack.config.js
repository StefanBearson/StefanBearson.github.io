const path = require('path');
const CleanPluging = require('clean-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	mode: 'development',
	resolve: {
		extensions: [ '.ts', '.tsx' ]
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
	entry: './src/script.ts',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'assets/scripts/'
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: './'
	},
	plugins: [ new CleanPluging.CleanWebpackPlugin(), new DashboardPlugin() ]
};
