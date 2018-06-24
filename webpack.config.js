const path = require('path');

// module.exports = {
//     mode: "development",
//     devtool: "inline-source-map",
//     entry: "./spec/index.spec.ts",
//     output: {
//         filename: "index.spec.js",
//         path: path.resolve(__dirname, 'dist/spec')
//     },
//     resolve: {
//         // Add `.ts` and `.tsx` as a resolvable extension.
//         extensions: [".ts", ".tsx", ".js"]
//     },
//     module: {
//         rules: [
//             // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
//             { test: /\.tsx?$/, loader: "ts-loader" }
//         ]
//     }
// };

const common = {
    mode: "development",
    devtool: "inline-source-map",
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

const spec = Object.assign({
    entry: "./spec/index.spec.ts",
    output: {
        filename: "index.spec.js",
        path: path.resolve(__dirname, 'dist/spec')
    },
}, common);

const library = Object.assign({
    entry: "./src/index.ts",
    output: {
        library:'doge',
        filename: "doge.js",
        path: path.resolve(__dirname, 'dist/js')
    },
}, common);

const demo = Object.assign({
    entry:'./demo/index.ts',
    output:{
        filename:'demo.js',
        path: path.resolve(__dirname, 'dist/js')
    }
}, common)

module.exports = [spec, demo];