const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/js/index.js",
        aboutus: "./src/js/about.js",
        product: "./src/js/product.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist/js/"),
        publicPath: './'
    },
    devServer: {
        contentBase: 'dist',
        overlay: true
    },
    module: {
        rules: [
            {//jsloader
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: "/node_modules"
            },
            {//cssloader
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }]
            },
            {//html loader
                test: /\.html$/,
                use: [{
                    loader: "file-loader", //给文件起名
                    options: {
                        name: "[name].html"
                    }
                },
                {
                    loader: "extract-loader" //分离html和js文件
                },
                {
                    loader: "html-loader", //分离html和js文件
                    options: {
                        attrs: ["img:src"]
                    }
                }]
            },
            {//图片loader
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "images/[name]-[hash:20].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
           

    ]
}
