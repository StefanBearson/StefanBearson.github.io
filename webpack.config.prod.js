const path = require('path');
const CleanPluging = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
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
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader'
			// 	]
			// }
		]
	},
	entry: './src/script.ts',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'assets', 'scripts'),
		publicPath: 'assets/scripts/'
	},
	//devtool: 'cheap-module-source-map',
	//devtool: 'cheap-source-map',
	devServer: {
		contentBase: './'
	},
	plugins: [ new CleanPluging.CleanWebpackPlugin() ]
};
