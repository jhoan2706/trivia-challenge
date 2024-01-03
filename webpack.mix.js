const path = require('path');
const mix = require('laravel-mix');

mix.js("resources/js/app.js", "public/js")
    .vue({ version: 3 })
    .postCss("resources/css/app.css", "public/css", []);

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-transform-modules-commonjs"],
                    },
                },
            },
        ],
    },
});
