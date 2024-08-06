import common from './webpack.common'
import { merge } from 'webpack-merge'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { Configuration } from 'webpack'

const dev: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  } as DevServerConfiguration,
  module: {
    rules: [
      {
        test: /\.module\.(sass|scss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(sass|scss|css)$/i,
        exclude: /\.module\.(sass|scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
}

export default merge(common, dev)