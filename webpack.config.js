const path = require("path")

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined")
      }

      devServer.watchFiles("./app/**/*.html")

      return middlewares
    },
    static: path.resolve(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0",
    open: true
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
