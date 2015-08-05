var gulp        = require('gulp');

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./sass/**'], ['sass']);
});

// assets tasks
gulp.task('assets', function(){
    gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(gulp.dest('./dist/fonts'));
        
    gulp.src('./node_modules/bootstrap-sass/assets/javascripts/**.js')
        .pipe(gulp.dest('./dist/javascripts'));
});