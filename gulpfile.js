var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
// var config = require('./gulp-config')();
var jsFiles = [
  // './node_modules/jquery/.js',
  './prototype/source/js/vendor/*.js',
  '!./prototype/source/js/_template.js',
  './prototype/source/js/*.js'
];
var ui = 'ui';
gulp.task('js', function () {
  return gulp
    .src(jsFiles)
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['env']
    }))
    .pipe($.concat('app.js'))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('/'))
    .pipe(gulp.dest('ui/js/'));
});