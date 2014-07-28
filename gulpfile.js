var gulp = require('gulp'),
    exclude = require('gulp-ignore').exclude,
    jshint = require('gulp-jshint'),
    nodeunit = require('gulp-nodeunit'),
    karma = require('gulp-karma'),
    chai = require('karma-chai'),
    protractor = require('gulp-protractor').protractor;

gulp.task('jshinter', function (cb) {
    return gulp.src('src/server/**/*.js')
        .pipe(exclude('src/server/spikes/**/*.js'))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .on('error', function(){
            process.exit(1);
            cb();
        })
        .on('end', function(){
            cb();
        });
});

gulp.task('serverTests',['jshinter'], function(cb){
   return gulp.src('src/server/tests/**/*_tests.js')
       .pipe(nodeunit()
   ).on('error', function(e){
           console.log("server tests finished with error -> " + e);
           process.exit(1);
           cb();
       })
       .on('end', function(errorCode){
           console.log("server tests end with error code " + errorCode);
           cb();
       })
});

gulp.task('clientTests', ['serverTests'], function(cb){
    return gulp.src('src/client/tests/**/*_tests.js')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('acceptanceTests',['clientTests'], function(cb){
   return gulp.src('src/features/protractor.js')
       .pipe(protractor({
           configFile: 'protractorConf.js'
       }))
       .on('error', function(e){cb()});
});


gulp.task('default', ['jshinter', 'clientTests']);