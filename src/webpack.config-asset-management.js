const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // optimization: {
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    //     // splitChunks: {
    //     //     cacheGroups: {
    //     //         styles: {
    //     //             name: 'styles',
    //     //             test: /\.(sa|sc|c)ss$/,
    //     //             chunks: 'all',
    //     //             enforce: true
    //     //         }
    //     //     }
    //     // }
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         moduleFilename: ({ name }) => `${name.replace('/js/', '/css/')}.css`,
    //         // Options similar to the same options in webpackOptions.output
    //         // all options are optional
    //         filename: devMode ? '[name].css' : '[name].[hash].css',
    //         chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    //         ignoreOrder: false, // Enable to remove warnings about conflicting order
    //     })
    // ],
    module: {
        rules: [
            {
                // test: /\.(sa|sc|c)ss$/,
                test: /\.css$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         // you can specify a publicPath here
                    //         // by default it uses publicPath in webpackOptions.output
                    //         publicPath: (resourcePath, context) => {
                    //             // publicPath is the relative path of the resource to the context
                    //             // e.g for ./cssadmin/main.css the publicPath will be ../../
                    //             // while for ./css/main.css the publicPath will be ../
                    //             return path.relative(path.dirname(resourcePath), context) + '/';
                    //         },
                    //         hmr: process.env.NODE_ENV === 'development'
                    //     }
                    // },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2\eot\ttf\otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};