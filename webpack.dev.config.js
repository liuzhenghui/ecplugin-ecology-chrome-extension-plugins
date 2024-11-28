const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    mode: 'development',

    // 配置服务器
    devServer: {
        port: 3000,
    },

    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        environment: {
            arrowFunction: false,
        },
    },

    // 用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"],
    },

    // 配置webpack的loader
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
        ],
    },

    // 配置webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
