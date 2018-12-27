'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('assets/scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
});

//sass --watch input:output
