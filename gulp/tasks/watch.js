var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

// Watch tasks
gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	// Watches HTML
	watch('./app/index.html', function(){
		browserSync.reload();
	});


	// Watches CSS
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});