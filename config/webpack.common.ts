import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import paths from './paths'
import { Configuration } from 'webpack'

const common: Configuration = {
  entry: [paths.src + '/app/index.tsx'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'new project',
      template: paths.template + '/template.html',
      filename: 'index.html', // разметка на выходе
    }),
  ],
  module: {
    rules: [
      { test: /\.[jt]sx?$/, use: ['ts-loader'], exclude: /node_modules/ },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      // Шрифты и СВГ
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i, type: 'asset/inline' },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': paths.src,
      public: paths.public,
      // алиасы замены для поддержки браузеров
      '^effector$': 'effector/compat',
      '^effector-react$': 'effector-react/compat',
    },
  },
}
export default common
