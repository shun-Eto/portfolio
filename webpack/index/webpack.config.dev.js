const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

//	System Environment Variable
const DOMAIN = "http://localhost:8080";
const SERVER_DOMAIN = "http://localhost:3000";
const MONGODB_ID = "heroku_p0n0r15z";
const MONGODB_API =
    "mongodb://Sopherre:Sopherre_1111@ds123919.mlab.com:23919/heroku_p0n0r15z";
const SENDGRID_API =
    "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";
const SECRET_KEY_32 = "Sopherre10100830Sopherre10100830";
const SECRET_BUFFER_KEY_16 = "Sopherre10100830";

//	config
const config = merge(baseConfig, {
    mode: "development",
    watch: true,
    plugins: [
        new webpack.DefinePlugin({
            "process.env.DOMAIN": JSON.stringify(DOMAIN),
            "process.env.SERVER_DOMAIN": JSON.stringify(SERVER_DOMAIN),
            "process.env.MONGODB_ID": JSON.stringify(MONGODB_ID),
            "process.env.MONGODB_API": JSON.stringify(MONGODB_API),
            "process.env.SENDGRID_API": JSON.stringify(SENDGRID_API),
            "process.env.SECRET_KEY_32": JSON.stringify(SECRET_KEY_32),
            "process.env.SECRET_BUFFER_KEY_16": JSON.stringify(
                SECRET_BUFFER_KEY_16
            ),
        }),
    ],
});

module.exports = config;
