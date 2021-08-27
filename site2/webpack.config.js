const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/index.html",
    filename: "index.html",
    inject:"body"
}) ;


module.exports={
    mode: "development",
    entry: {
       index: __dirname + '/src/index.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules | components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader',"css-loader"]
            }
        ]
    },
    devServer:{
        port: 5500
    },
    output: {
        filename: '[name].bundle.js',
        path:__dirname + "/build",
        clean: true
    },
    plugins: [HTMLWebpackPluginConfig],
    
};