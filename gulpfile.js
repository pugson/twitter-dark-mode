var gulp = require('gulp');
var sass = require('gulp-sass');
var sassbeautify = require('gulp-sassbeautify');
var cssnano = require('gulp-cssnano');

gulp.task('build', function() {
  gulp.src('./*.scss')
    .pipe(sass({outputStyle: 'expanded'})
    .on('error', sass.logError))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify', function() {
  gulp.src('./dist/darkmode.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/min'))
});

gulp.task('beautify', function() {
  gulp.src('./*.scss')
    .pipe(sassbeautify())
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['build', 'minify', 'beautify'], function() {
  gulp.watch('./*.scss', ['build', 'minify', 'beautify'])
});