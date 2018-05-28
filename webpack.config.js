const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const _ = require('lodash');

module.exports =
{
	entry:
  	{
  		app: './src/index.js',
  		//somecode: './src/somecode.js'
	},
	/*module:
	{
		rules:
		[
			{
				test: /\.css$/,
				use:
				[
					'style-loader',
          			'css-loader'
				]
			}
		]
	},
	*/
	module:
	{
		/*
		rules:
		[
			{
	            test: /\.scss$/,
	            use:
	            [
	                "style-loader", // creates style nodes from JS strings
	                "css-loader", // translates CSS into CommonJS
	                "sass-loader" // compiles Sass to CSS
	            ]
        	}
        ]
        */
		
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        }]
        
    },
	plugins: 
	[
		new CleanWebpackPlugin(['dist']),
    	new HtmlWebpackPlugin()
	],
	output:
	{
  		filename: /*'[name].*/'bundle.js',
    	path: path.resolve(__dirname, 'dist')
	}
};