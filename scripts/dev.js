var bs = require("browser-sync").create();
const options = require('./esbuild-config.js');
const { build } = require('esbuild')

// Start the Browsersync server
bs.init({
  server: {
    baseDir: "public",
    watch: true,
  }
});

bs.watch('src/**/*.ts?', function (event, file) {
  build(options)
    .then(() => bs.reload())
    .catch(() => process.exit(1))
})