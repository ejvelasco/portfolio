var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var importCss = require('gulp-import-css');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
 

gulp.task('js', function() {
    return (
        browserify('./public/js/portfolio.js')
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('portfolio.js'))
        .pipe(gulp.dest('./public/build/'))
        .pipe(livereload())
    );
});
gulp.task('pug', function(){
  gulp.src('./views/*.pug')
    .pipe(livereload());
})
gulp.task('minify-css', function () {
  gulp.src('./public/css/portfolio.css')
    .pipe(importCss())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/build/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./views/*.pug', ['pug']);
  gulp.watch('./public/js/*.js', ['js']);
  gulp.watch('./public/css/*.css', ['minify-css']);
});

gulp.task('default', ['js', 'minify-css', 'watch', 'pug']);