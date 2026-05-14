import path from "node:path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import * as webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// in case you run into any TypeScript error when configuring `devServer`
// import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: (webpack.Configuration | webpackDevServer) = {
  entry: "./src/game/game.ts",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3)$/i,
        type: 'asset/resource',
      },
       {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./src/dist/"),
  },
  devtool: 'eval',
  devServer: {
    static: "./src/dist",
  },


};


export default config;