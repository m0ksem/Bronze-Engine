const path = require('path')

module.exports = {
    entry: {
        etue: './src/Bronze.js'
    },
    output: {
        filename: 'Bronze.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        library: "Bronze",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}