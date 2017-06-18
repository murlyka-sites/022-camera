'use strict';

var gulp = require('gulp')

gulp.task('spritesmith', function() {
	var spritesmith = require('gulp.spritesmith');

	var spriteDate = gulp.src('./sprite/*.*')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.styl',
			cssFormat: 'styl',
			algorithm: 'binary-tree',
			cssTemplate: 'spritesmith.mustache'
		}));

	spriteDate.img.pipe(gulp.dest('./images/'));
	spriteDate.css.pipe(gulp.dest('./stylus/spritesmith/'));
	console.log('finally');
	
});

gulp.task('watch', function() {
	var watch = require('gulp-watch');

	// watch('./dev/*.html', watchBatch(['html']));
	//watch('./dev/less/**/*.less', watchBatch(['less']));
	// watch('./dev/css/*.css', watchBatch(['style']));
	watch('./sprite/*.png', watchBatch(['spritesmith']));

	// watch('./dev/js/*.js', watchBatch(['js']));
});

gulp.task('default', ['watch']);
/*
* функция обёртка для gulp-watch
*/

function watchBatch(arr) {
	var batch  = require('gulp-batch');
	return batch( function(events, done) {
		for(var i = 0; i < arr.length; i++) {
			gulp.start(arr[i], done);
		}
	});
}
