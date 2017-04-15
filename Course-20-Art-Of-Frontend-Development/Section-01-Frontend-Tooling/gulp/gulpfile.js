var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
    pump([
            gulp.src('js/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});