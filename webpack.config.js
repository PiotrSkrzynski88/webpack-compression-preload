const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'bundle.js'
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js$|\.css$/,
            deleteOriginalAssets: true
        }),
    ]
}
