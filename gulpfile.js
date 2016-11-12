var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
/*var concat = require('gulp-concat');*/

var paths = {
    sass: path.resolve('./sass'),
    css: path.resolve('./css')
};

gulp.task('sass', function() {
    return gulp.src([paths.sass + '/main.scss'])
        /*.pipe(sass())
        /*.pipe( concat('all.css') )
        .pipe(cleancss())
        .pipe(rename('style.min.css'))*/
        .pipe( sass( {
			outputStyle: 'compressed'} ) )
		.pipe( autoprefixer( ['last 15 version', '>1%', 'ie 9'], {cascade: true} ) )
		.pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch(paths.sass + '/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
