const nodeExternals = require("webpack-node-externals");
const path = require("path");

const config = {
    //	Error : regeneratorRuntime is not defined 回避 => "@babel/polyfill"
    entry: [path.resolve(__dirname, "../../src/index.ts")],
    externals: [nodeExternals()], //	errorの無視？？
    target: "node",
    output: {
        path: path.join(__dirname, "../../dist"),
        filename: "index.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: "tsconfig.json",
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.css/,
                loaders: "url-loader",
            },
            {
                // 追記
                test: /\.html$/,
                loaders: "url-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "html", "css"],
    },
};

module.exports = config;
