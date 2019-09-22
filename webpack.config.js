var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
    // Change to your "entry-point".
    entry: {
        'Bronze': './src/Bronze.ts',
        'Bronze.min': './src/Bronze.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        library: "Bronze",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer: {
        overlay: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.glsl']
    },
    module: {
        rules: [
                {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js|glsl)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl'
            }
        ],
        // loaders: [
        //     {
        //         test: /\.ts|js$/,
        //         exclude: /(node_modules|bower_components)/,
        //         loader: 'babel-loader',
        //         query: {
        //             cacheDirectory: true,
        //             presets: ['es2015']
        //         }
        //     },
        //     {
        //         test: /\.glsl$/,
        //         loader: 'webpack-glsl'
        //     }
        // ]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [
        new TypedocWebpackPlugin({})
    ]
};