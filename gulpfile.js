var gulp = require('gulp'),
    bower = require('gulp-bower');
var serve = require('gulp-serve');

var config = {
    bowerDir: './bower_components'
}

gulp.task('serve', serve({
	root: ['public','public-mock']
	})
);

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('default', ['bower']);
