let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

mix.disableSuccessNotifications();
mix.setPublicPath('assets/compiled/');

mix.options({
    processCssUrls: false,
    postCss: [
        require('postcss-import'),
        tailwind(),
    ]
    })
    // .sass('assets/sass/app.scss', 'css/app.css')
    .postCss('assets/css/app.css', 'css/app.css')
    .js('assets/js/app.js', 'js/app.js')
    .purgeCss({
        globs: [
            // path.join(__dirname, 'node_modules/pikaday/**/*.js'),
        ],
        whitelistPatterns: [
            // /status-./
        ],
        whitelist: [
            // 'icon-status'
        ]
    })
    .version();