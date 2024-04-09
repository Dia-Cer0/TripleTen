<!--CONFIGURE NODE.js-->

install NODE.js from this link:https://nodejs.org/en/download/

# check your Node.js version in the Bash terminal

node -v

# this was the current version at the time of writing, yours may differ

v16.13.2

npm -v

# You should have this, or a later version

8.1.2

npm init # in the project folder <!--generate package.json in the root folder of the project-->

npm init --yes <!--this will automatically skip all prompts for quick initializtion-->

<!--npm install examples-->

# install the most recent version

npm install package-name

# install version 1.2.x, where x is the most recent patch

npm install package-name@~1.2.3

# install version 1.x.y, where x.y is the most recent minor.patch version

npm install package-name@^1.2.3

# install specific version 1.2.3

npm install package-name@1.2.3 --save-exact

# to make npm always save exact, you can make an ".npmrc" file in the root folder and add the line "save-exact=true" to it and save it.

# remember to add "node_modules/" to the .gitignore file to avoid unnecessary tracking of node modules in git.

<!--Setting up WEBPACK-->

npm i webpack@5.76.0 --save-dev --save-exact

npm i webpack-cli@4.10.0 --save-dev --save-exact <!--install webpack command line interface (CLI)-->

npm i webpack-dev-server@4.9.3 --save-dev --save-exact <!--intall webpack local development server. this will be deployed when building the project in development mode for local debugging-->

npm i clean-webpack-plugin@4.0.0 --save-dev --save-exact <!--clears the dist folder every time the project is built to only keep the latest build in the dist folder-->

<!--FINAL WEBPACK CONFIG FILE "webpack.config.js" should be in root folder of project

// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // connect plugin

// connect mini-css-extract-plugin to the project
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map", //makes debugging code much easier
  entry: {
    main: "./src/index.js",
  },
  stats: "errors-only", // only output when errors happen
  output: {
    // rewrite the output point using the path utility
    path: path.resolve(__dirname, "dist"), // you could name this anything you want, but let's stick to 'dist'
    filename: "main.js", // you could also name this anything you want, but let's stick to 'main.js'
    publicPath: "",
  },
  mode: "development", // add development mode here like this
  devServer: {
    static: path.resolve(__dirname, "./dist"), // specifies a folder from where to serve the application and its contents
    compress: true, // this will speed up file loading in development mode
    port: 8080, // will open your site at localhost:8080 (you can use another port)
    open: true, // site will open automatically in the browser after executing npm run dev
    liveReload: true,
    hot: false,
  },
  module: {
    rules: [
      // this is an array of rules
      // add an object containing rules for Babel to it
      {
        // a regular expression that searches for all js files
        test: /\.js$/,
        // all files must be processed by babel-loader
        loader: "babel-loader",
        // exclude the node_modules folder, we don't need to process files in it
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          }, // add postcss-loader
          "postcss-loader",
        ],
      },
      {
        // add the rule for processing files
        test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // path to our index.html file
    }),
    new CleanWebpackPlugin(), // use plugin
    new MiniCssExtractPlugin(), // connect the plugin for merging CSS files
  ], // add the array here
};

// module.exports is the syntax for export in Node.js


-->

<!--WEBPACK JS DEPENDENCIES -->

npm i @babel/core@7.18.9 --save-dev --save-exact <!--javascript compiler that transforms new javascript syntax into older syntax to make it backwards compatible with older browsers that do not support newer js syntax  -->
npm i @babel/preset-env@7.18.9 --save-dev --save-exact <!--babel configuration preset; this specifies what browsers we want our code to work once it is put into a build -->

npm i core-js@3.23.5 --save --save-exact <!--install corejs polyfill library. this has pieces of code that are inserted to support legacy functionality where needed -->

npm i babel-loader@8.2.5 --save-dev --save-exact <!--babel loader allows webpack to be used with babel -->

<!--WEBPACK HTML DEPENDENCIES-->

npm i html-webpack-plugin@5.5.0 --save-dev --save-exact <!--allows webpack to work with html files-->

<!--WEBPACK CSS DEPENDENCIES -->

npm i css-loader@6.7.1 --save-dev --save-exact <!--allows webpack to work with css files-->
npm i mini-css-extract-plugin@2.6.1 --save-dev --save-exact <!--combines all css files into one file for the build to be uploaded to the server-->

# use `npm run build` to build project

<!--//FINAL BABEL CONFIG FILE "babel.config.js" should be in root folder of project


const presets = [
  [
    "@babel/preset-env",
    {
      // preset you want to use
      // browser versions in which we want our code supported
      targets: "defaults, not IE 11, not dead",

      // use polyfills for the browsers specified in the above targets option
      // Babel uses polyfills from the core-js library
      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

module.exports = { presets };

-->

<!--CONFIGURE PostCSS-->

npm i postcss-loader@7.0.1 --save-dev --save-exact <!--connects PostCSS to webpack -->

npm i autoprefixer@10.4.7 --save-dev --save-exact <!--teaches PostCSS to add vendor prefixes -->
npm i cssnano@5.1.12 --save-dev --save-exact <!--minimizes the CSS code (compresses it so to speak) -->

<!--//FINAL PostCSS CONFIG FILE "postcss.config.js" should be in root folder of project

// postcss.config.js

// connect plugins to the file
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  // connect plugins to PostCSS
  plugins: [
    // connect autoprefixer
    autoprefixer,
    // pass an object with options upon connecting cssnano:
    cssnano({ preset: "default" }), // set default minification settings
  ],
};


-->

<!-- //FINAL package.JSON file

{
  "name": "practicum",
  "version": "0.0.1",
  "description": "Educational platform",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development"
  },
  "keywords": [],
  "author": "Elise Bouer",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "7.18.9",
    "@babel/preset-env": "7.18.9",
    "autoprefixer": "10.4.7",
    "babel-loader": "8.2.5",
    "clean-webpack-plugin": "4.0.0",
    "css-loader": "6.7.1",
    "cssnano": "5.1.12",
    "html-webpack-plugin": "5.5.0",
    "mini-css-extract-plugin": "2.6.1",
    "postcss-loader": "7.0.1",
    "webpack": "5.76.0",
    "webpack-cli": "4.10.0",
    "webpack-dev-server": "4.9.3"
  },
  "dependencies": {
    "core-js": "3.23.5"
  }
}




-->
