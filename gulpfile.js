var gulp = require('gulp'),
browserify = require('browserify'),
babelify = require('babelify'),
source = require('vinyl-source-stream'),
importCss = require('gulp-import-css'),
cleanCSS = require('gulp-clean-css'),
livereload = require('gulp-livereload');

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

gulp.task('pug-1', function(){
  gulp.src('./views/*.pug')
    .pipe(livereload());
});

gulp.task('pug-2', function(){
  gulp.src('./views/partials/*.pug')
    .pipe(livereload());
});

gulp.task('minify-css', function () {
  gulp.src('./public/css/portfolio.css')
    .pipe(importCss())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/build/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./views/*.pug', ['pug-1']);
  gulp.watch('./views/partials/*.pug', ['pug-2']);
  gulp.watch('./public/js/*.js', ['js']);
  gulp.watch('./public/css/*.css', ['minify-css']);
});

gulp.task('default', ['js', 'minify-css', 'watch', 'pug-1', 'pug-2']);