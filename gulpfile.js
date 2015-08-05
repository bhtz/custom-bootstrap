var gulp = require('gulp');
require('./tasks/sass');
require('./tasks/build');
require('./tasks/serve');

// build dist in debug mode
gulp.task('build', ['assets', 'sass']);

// build dist in release mode
gulp.task('release', ['assets', 'sass:release']);

// build dist and expose local server to port 3000
gulp.task('serve', ['build', 'watch', 'connect']);