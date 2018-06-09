const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./spec/index.spec.ts",
    output: {
        filename: "index.spec.js",
        path: path.resolve(__dirname, 'dist/spec')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};