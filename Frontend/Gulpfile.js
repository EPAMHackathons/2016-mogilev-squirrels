'use strict';

var gulp = require("gulp");
var templateCache = require('gulp-angular-templatecache');
var sass = require('gulp-sass');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var gutil = require("gulp-util");

var destinationFolder = "../WebSite/";

var bowerDirectory = "src/vendor";
var bowerComponentsPath = "./" + bowerDirectory + "/**/*.*";

var assetDirectory = "src/assets";
var assetDirectoryPath = "./" + assetDirectory + "/**/*.*";

var copyTask = function (src, dest) {
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

gulp.task('copy_bower', function () {
    copyTask(bowerComponentsPath
        , destinationFolder + bowerDirectory + "/");
});

gulp.task('copy_assets', function () {

    copyTask(assetDirectoryPath,
        destinationFolder + assetDirectory + "/");
});

gulp.task('copy_all', ['copy_bower', 'copy_assets']);

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

gulp.task('sass', function () {
    gulp.src('./src/app/app.scss')
        .pipe(sass())
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('webpack:watch', function () {
    gulp.watch('./src/app/**/*.ts', ['webpack']);
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/app/**/*.scss', ['sass']);
});

gulp.task('templatecache:watch', function () {
    gulp.watch('./src/app/**/*.html', ['templatecache']);
});

gulp.task('copy_all:watch', function () {
    gulp.watch(bowerComponentsPath, ['copy_bower']);
    gulp.watch(assetDirectoryPath, ['copy_assets']);
});

gulp.task('watch', ['templatecache', 'sass', 'webpack', 'copy_all', 'templatecache:watch', 'sass:watch', 'webpack:watch']);

gulp.task('default', ['copy_all', 'templatecache', 'sass', 'webpack'])

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
    temp: './src/core/templates/'
};