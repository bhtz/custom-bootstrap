var gulp = require('gulp');
require('./tasks/sass');
require('./tasks/build');
require('./tasks/serve');

// build dist in debug mode
gulp.task('build', ['assets', 'sass']);

// build dist in release mode
gulp.task('release', ['assets', 'sass:release']);

// build dist in debug 
// expose local server to port 3000
// open default browser
gulp.task('serve', ['build', 'watch', 'connect', 'open']);