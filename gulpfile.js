var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

/* gulp.task ('log', function() {
    gutil.log('Das macht Spaß');
}); */

//javascript dateien punkt 3
var coffeeScripts = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'

];

gulp.task('coffee', function(){
    gulp.src(coffeeScripts)
    .pipe(coffee({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});
// javascript dateien in script js zusammenschreiben
gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/scripts'))
});
