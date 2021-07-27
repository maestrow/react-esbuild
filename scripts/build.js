const { build } = require('esbuild')

const isProd = process.env.NODE_ENV === 'production';

const options = {
  entryPoints: ['./src/App.tsx'],
  minify: isProd,
  sourcemap: !isProd,
  bundle: true,
  outfile: './public/bundle.js',
}

build(options).catch(err => {
  process.stderr.write(err.stderr)
  process.exit(1)
})