const mix = require('laravel-mix');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    plugins: [
        new NodePolyfillPlugin()
    ]
});

mix.js('assets/js/app.js', 'assets/compiled/js')
    .postCss('assets/css/app.css', 'assets/compiled/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);


if (mix.inProduction()) {
    mix.version();
}
