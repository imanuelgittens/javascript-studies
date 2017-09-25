let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const SRC = path.join(__dirname, 'src/');
const SCSS = path.join(SRC, 'scss');
const NODE_MODULES = path.join(__dirname, 'node_modules/');

module.exports = {
	entry: './src',
	output: {
		path: __dirname + '/dist',
		filename: 'my-app.js'
	},
	resolve: {
      modules: [SRC, NODE_MODULES, SCSS, path.join(SRC, 'vendor')]
  },
  devServer: {
      contentBase: __dirname + '/dist',
      compress: true,
      port: 9000
  },
  module: {
  	rules: [
  		{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader'
	      }
	    },
			{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      },
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
            {
                loader: "jshint-loader"
            }
        ]
      }
		]
  },
  plugins: [
  	new webpack.BannerPlugin({
  		banner: 'Hey there! This is a banner comment.', // the banner as string, it will be wrapped in a comment
		  raw: false, // if true, banner will not be wrapped in a comment
		  entryOnly: true, // if true, the banner will only be added to the entry chunks
  	}),
  	new HtmlWebpackPlugin()
  ]
};