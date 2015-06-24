var
    path = require("path"),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task("webpack", function(callback) {

    webpack({
        context: __dirname,
        entry: {
            'base': __dirname + '/source/base.builder.js',
            'app': __dirname + '/source/app/index.js'
        },
        resolve: {
            alias: {
                'angular': __dirname + '/www/lib/angular/angular.min.js',
                'angular-animate': __dirname + '/www/lib/angular-animate/angular-animate.min.js',
                'angular-sanitize': __dirname + '/www/lib/angular-sanitize/angular-sanitize.min.js',
                'angular-ui-router': __dirname + '/www/lib/angular-ui-router/release/angular-ui-router.min.js',
                'angular-local-storage': __dirname + '/www/lib/angular-local-storage/dist/angular-local-storage.min.js',
                'ngCordova': __dirname + '/www/lib/ngCordova/dist/ng-cordova.min.js',
                'ionic': __dirname + '/www/lib/ionic/release/js/ionic.min.js',
                'ionic-angular': __dirname + '/www/lib/ionic/release/js/ionic-angular.min.js'
            }
        },
        output: {
            path: __dirname + "/www/js",
            filename: "[name].js"
        },
        module: {
            loaders: [{
                test: /\.html$/,
                loader: "html?attrs=img:data-src"
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.png$/,
                loader: "url?limit=10000&name=../img/[hash].[ext]"
            }]
        },
        plugins: [
            new ExtractTextPlugin("../css/[name].css")
        ]
    }, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({

        }));
        callback();
    });
});

gulp.task('default', function() {

    gulp.run('webpack');

    gulp.watch('source/app/**', function(event) {
        gulp.run('webpack');
    })
});
