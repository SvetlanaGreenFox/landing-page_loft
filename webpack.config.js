const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';

module.exports = {
    mode,
    target,
    entry: [path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/[hash][ext]'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template using Handlebars',
        template: path.resolve(__dirname, 'src', 'index.html')
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
              },
            {
                test: /\.(sa|c|sc)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                              quality: 75
                            }
                          }
                    }
                ],
                type: 'asset/resource'
            }
        ]
    }
}