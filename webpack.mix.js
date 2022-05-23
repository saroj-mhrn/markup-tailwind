const { browserSync } = require('laravel-mix');
const mix = require('laravel-mix');
require('mix-html-builder');
require('browser-sync');

mix.setPublicPath('dist')
    .js('src/assets/js/app.js', 'js/')
    .postCss('src/assets/css/app.css', 'css/', [require('tailwindcss')])
    .html({
        htmlRoot: './src/*.html',
        output: './',
        minify: {
            removeComments: true
        },
        // versioning: true
    })
    .sourceMaps(false, 'source-map')
    .browserSync({
        files: ['src/assets/css/app.js', 'src/assets/js/*.js', 'src/**/*.html'],
        server: {
            baseDir: 'dist',
            index: 'index.html'
        }
    })
    .version();


if (mix.inProduction()) {
    mix.version();
}
