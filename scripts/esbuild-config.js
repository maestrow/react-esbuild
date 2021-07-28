const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entryPoints: ['./src/App.tsx'],
  minify: isProd,
  sourcemap: !isProd,
  bundle: true,
  outfile: './public/bundle.js',
}
