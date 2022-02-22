const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

// DevServer settings
const host = process.env.DEV_SERVER_HOST || "localhost";
const port = process.env.DEV_SERVER_PORT || 4200;

// Manifest opts
const manifestOpts = {
	publicPath: "/static"
}

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: ["./src/main.ts", "./styles/app.scss"],
	output: {
		filename: "app.[chunkhash].js",
		path: path.resolve(__dirname, "build"),
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
		historyApiFallback: true,
		hot: false,
		host: host,
		port: port,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "app.[chunkhash].css",
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			hash: true,
		}),

		new WebpackManifestPlugin(manifestOpts)
	],
};
