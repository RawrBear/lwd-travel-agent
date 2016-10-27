var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require("postcss-nested"),
	watch = require('gulp-watch');


// Tasks

gulp.task('default', function() {
	console.log('Default Function Has Run :)')
});

// HTML Task
gulp.task('html', function() {
	console.log('HTML Function Has Run :)')
});


// Styles / CSS Tasks
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});


// Watch tasks
gulp.task('watch', function() {

	// Watches HTML
	watch('./app/index.html', function(){
		gulp.start('html')
	});


	// Watches CSS
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});