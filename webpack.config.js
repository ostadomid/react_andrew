const webpack = require('webpack');
const path = require('path');

module.exports={
    entry: [
        './src/playground/auth.js'
    ],
    output: {
        path: path.resolve(__dirname, './public/scripts/'),
        filename: 'app.js',
        publicPath:'/scripts/'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.s?css$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    /*devtool:'cheap-module-eval-source-map',*/
    devServer: {
        contentBase: "./public",
        historyApiFallback : true, /* instead of sending 404 , send index.html again*/
        port: 8000        
      }
};