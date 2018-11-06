module.exports = {
  plugins: [
    require('postcss-clean'),
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions'],
    }),
  ],
};
