'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    path = require('path'),
    rename = require('gulp-rename'),
    // autoprefix = require('gulp-autoprefixer'),
    // cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

    // modernizr = require('gulp-modernizr'),
    // browserSync = require('browser-sync').create();
    series = require('gulp-series'),
    parallel = require('gulp-ccr-parallel'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence');


gulp.task('sass', function() {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass'])
});

gulp.task('jsmin', function() {
    gulp.src(['assets/src/js/vendor/**/*.js',
              'assets/src/js/modules/**/*.js',
              'assets/src/js/main.js'])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets/dist/js/'));
});

gulp.task('svgs', function () {
  return gulp
    .src('assets/img/svg/*.svg')
    .pipe(rename({prefix: 'shape-'}))
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.
        relative, path.extname(file.
        relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore())
    .pipe(rename('svg-defs.svg'))
    .pipe(gulp.dest('views/utility'));
});

gulp.task('default', ['watch']);

gulp.task('build', function() {
    runSequence('sass', 'jsmin', 'svgs');
});
