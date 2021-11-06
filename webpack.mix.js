const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'public/js')
    // .sass('assets/css/app.css', 'css', [
    //     require("tailwindcss"),
    // ])
    .postCss("assets/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .setPublicPath('public');