var gulp = require('gulp');
var del  = require('del');
var open = require('gulp-open');

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./sass/**'], ['sass']);
});

// copy bootstrap assets (fonts, js)
gulp.task('assets', function(){
    gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(gulp.dest('./dist/fonts/bootstrap'));
        
    gulp.src('./node_modules/bootstrap-sass/assets/javascripts/**.js')
        .pipe(gulp.dest('./dist/js'));
});

// clean dist folder
gulp.task('clean', function (cb) {
    del([
    	'./dist/css',
    	'./dist/js',
    	'./dist/fonts'
	])
});

// open default browser
gulp.task('open', function(){
	gulp.src('')
		.pipe(open({uri: 'http://localhost:3000'}));
});