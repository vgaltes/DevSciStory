var gulp = require('gulp'),
    notify = require('gulp-notify'),
    exclude = require('gulp-ignore').exclude,
    jshint = require('gulp-jshint'),
    nodeunit = require('gulp-nodeunit');

gulp.task('jshinter', function () {
    return gulp.src('src/server/**/*.js')
        .pipe(exclude('src/server/spikes/**/*.js'))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('serverTests', function(){
   return gulp.src('src/server/tests/**/*_tests.js')
       .pipe(nodeunit()
   );
});

gulp.task('default', [], function () {
    gulp.start('jshinter', 'serverTests');
});