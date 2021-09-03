const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildRoot = "build";
const appRoot = "src";

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/main.ts",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, buildRoot),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.ts?$/, 
				use: ["ts-loader"],
				exclude: /node_modules/ 
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".json"],
		alias: {
			"$app": path.resolve(__dirname, appRoot),
		}
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

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			hash: true, // This is useful for cache busting
		}),
	]
};