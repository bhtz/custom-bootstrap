var gulp        = require('gulp');
var connect     = require('gulp-connect');

// run connect server
gulp.task('connect', function() {
	connect.server({
		root: 'dist',
		port: 3000,
		livereload: true
	});
});

// run livereload
gulp.task('reload', function () {
	connect.reload()
});