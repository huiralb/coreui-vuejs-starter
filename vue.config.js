const Dotenv = require("dotenv-webpack")

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  // proxy API requests to Valet during development
  // adjust according to your dev setup
  devServer: {
    proxy: "http://localhost:8000"
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: "../public",

  // webpack
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: "../.env",
        safe: false // not load .env.example
      })
    ]
  },

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugin("html").tap(opts => {
        opts[0].filename = "../resources/views/index.blade.php"
        return opts
      })
    }
  }
}
