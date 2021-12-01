const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss({
      content: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.css',
        './node_modules/react-responsive-carousel/**/*.css',
        'public/**/*.html',
      ],
    })
  ]
}