var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var clean       = require('gulp-clean');
var source      = require('vinyl-source-stream');
var del         = require('del');


gulp.task('default', ['jsTask', 'jsonTask']);


gulp.task('serve', ['jsTask', 'jsonTask'], function(){

  gulp.watch('./src/js/*.js', ['jsTask']);

  gulp.watch('./src/assets/json/*.json', ['jsonTask']);

});


gulp.task('jsTask',function () {

  del(['./dist/js/*.js']).then(paths => {

    console.log('Deleted files and folders:\n', paths.join('\n'));

    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'));


  });

});


gulp.task('jsonTask',function () {

  del(['./dist/assets/data/*.json']).then(paths => {

    console.log('Deleted files and folders:\n', paths.join('\n'));

    return gulp.src('./src/assets/data/*.json')
    .pipe(gulp.dest('./dist/assets/data'));

  });

});