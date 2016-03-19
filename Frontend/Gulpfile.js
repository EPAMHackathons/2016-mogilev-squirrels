'use strict';

var gulp = require("gulp");
var config = require('./build.json');

var templateCache = require('gulp-angular-templatecache');
var less = require('gulp-less');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var gutil = require("gulp-util");

var destinationFolder = config.PATH;

var bowerDirectory = "src/vendor";
var bowerComponentsPath = "./" + bowerDirectory + "/**/*.*";

var assetDirectory = "src/assets";
var assetDirectoryPath = "./" + assetDirectory + "/**/*.*";

var templateDirectory = "src";
var templateDirectoryPath = "./" + templateDirectory + "/index.html";

var copyTask = function (src, dest) {
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

gulp.task('copy_bower', function () {
    copyTask(bowerComponentsPath
        , destinationFolder + "vendor/");
});

gulp.task('copy_assets', function () {

    copyTask(assetDirectoryPath,
        destinationFolder + "assets/");
});

gulp.task('copy_template', function () {

    copyTask(templateDirectoryPath,
        destinationFolder);
});

gulp.task('copy_all', ['copy_bower', 'copy_assets', 'copy_template']);

gulp.task("webpack", function (callback) {
    // run webpack
    webpack(
        require('./webpack.config.js'),
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
});

gulp.task('templatecache', function () {
    return gulp
        .src(config.htmltemplates)
        .pipe(templateCache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
});

gulp.task('less', function () {
    gulp.src('./src/app/app.less')
        .pipe(less())
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('webpack:watch', function () {
    gulp.watch('./src/app/**/*.ts', ['webpack']);
});

gulp.task('less:watch', function () {
    gulp.watch('./src/app/**/*.less', ['less']);
});

gulp.task('templatecache:watch', function () {
    gulp.watch('./src/app/**/*.html', ['templatecache']);
});

gulp.task('copy_all:watch', function () {
    gulp.watch(bowerComponentsPath, ['copy_bower']);
    gulp.watch(assetDirectoryPath, ['copy_assets']);
});

gulp.task('watch', ['templatecache', 'less', 'webpack', 'copy_all', 'templatecache:watch', 'sass:watch', 'webpack:watch']);

gulp.task('default', ['copy_all', 'templatecache', 'less', 'webpack'])

var config = {
    htmltemplates: 'src/app/**/*.html',
    templateCache: {
        file: 'templates.run.ts',
        options: {
            module: 'app.core.templates',
            standAlone: false
            //root: '/',
        }
    },
    temp: './src/app/core/templates/'
};