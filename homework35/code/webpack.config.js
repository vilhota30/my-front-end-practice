import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const mode = argv.mode || 'development';
  const isProd = mode === "production";

  return {
    mode: mode,
    entry: "./react-app/src/index.js", // Виправлений шлях
    devtool: !isProd ? "source-map" : false,
    devServer: {
      devMiddleware: {
        writeToDisk: true,
      },
      static: path.resolve(__dirname, "dist"),
      compress: true,
      port: 3000,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.bundle.js",
      clean: true,
    },
    module: {
      // loaders
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }, 
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          type: "asset",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack page",
        template: "./react-app/src/index.html", // Виправлений шлях
        scriptLoading: "defer",
        minify: true,
        hash: true,
      }),
    ],
  };
};

