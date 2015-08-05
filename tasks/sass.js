var gulp       = require('gulp');
var sass       = require('gulp-sass');
var connect    = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
 
// build sass in debug mode
gulp.task('sass', function () {
  gulp.src('./sass/bootstrap.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

// build sass in release mode
gulp.task('sass:release', function () {
  gulp.src('./sass/bootstrap.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});