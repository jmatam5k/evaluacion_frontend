var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var image =require('gulp-imagemin');

gulp.task('script', function(){
	gulp.src('src/js/custom.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function(){
	gulp.src('src/sass/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css'))

});
gulp.task('image', function() {
     gulp.src('docs/**/*.{jpg,jpeg,gif,png,svg}')
   .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('default',['script','style', 'fonts', 'image']);

gulp.task('watch', function (){
	gulp.watch('src/js/*.js', function(){
	});
});