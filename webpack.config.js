const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildRoot = "build";

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: ["./src/main.ts", "./styles/app.scss"],
	output: {
		filename: "app.[chunkhash].js",
		path: path.resolve(__dirname, buildRoot),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".json", ".scss"],
	},
	// development options here
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, buildRoot),
			watch: true,
		},
		historyApiFallback: true,
		hot: false,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "app.[chunkhash].css",
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			hash: true,
		}),
	],
};
