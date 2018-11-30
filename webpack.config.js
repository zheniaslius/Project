const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'FlyPost';

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        index: path.join(dirApp, 'index'),
        service: path.join(__dirname, 'assets/services/services.js'),
        tarifs: path.join(__dirname, 'assets/tarifs/tarifs.js'),
        about: path.join(__dirname, 'assets/about/about.js'),
        contacts: path.join(__dirname, 'assets/contacts/contacts.js')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
            filename: 'index.html',
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            template: './assets/services/services.html',
            filename: './services.html',
            inject: true,
            title: 'Services',
            chunks: ['service']
        }),
        
        new HtmlWebpackPlugin({
            template: './assets/tarifs/tarifs.html',
            filename: './tarifs.html',
            inject: true,
            title: 'Tarifs',
            chunks: ['tarifs']
        }),

        new HtmlWebpackPlugin({
            template: './assets/about/about.html',
            filename: './about.html',
            inject: true,
            title: 'About us',
            chunks: ['about', 'service']
        }),

        new HtmlWebpackPlugin({
            template: './assets/contacts/contacts.html',
            filename: './contacts.html',
            inject: true,
            title: 'Contacts',
            chunks: ['contacts', 'service']
        }),

        new CopyWebpackPlugin([
            { from: 'assets/images', to: 'assets/images' }
        ]),
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true,
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader'
                }
            }
        ]
    }
};
