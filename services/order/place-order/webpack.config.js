module.exports = {
  // Loads the entry object from the AWS::Serverless::Function resources in your
  // SAM config. Setting this to a function will
  entry: () => "src/index.ts",

  // Write the output to the .aws-sam/build folder
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2",
    path: __dirname + "/lib"
  },

  // Resolve .ts and .js extensions
  resolve: { extensions: [".ts", ".js"] },

  // Target node
  target: "node",

  mode: "production",

  optimization: {
    minimize: true
  },

  // Add the TypeScript loader
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },

  plugins: []
};
