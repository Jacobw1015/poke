const HtmlWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/index.html",
    filename: "index.html",
    inject:"body"
}) ;


module.exports={
    mode: "development",
    entry: __dirname + '/src/index.js',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path:__dirname + "/build",
        clean: true
    },
    plugins: [HTMLWebpackPluginConfig],
    
};