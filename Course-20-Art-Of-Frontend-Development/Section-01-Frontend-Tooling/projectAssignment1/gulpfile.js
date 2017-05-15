var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imgmin = require('gulp-imagemin');
var jasmine = require('gulp-jasmine');
var bump = require('gulp-bump');
var injectVersion = require('gulp-inject-version');
var git = require('gulp-git');

gulp.task('sass', function(){
	return gulp.src('./src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./src/css'));
});

gulp.task('minify-css', function(){
	gulp.src('./src/css/*.css')
	.pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('imgmin', function(){
	gulp.src('./src/img/*')
	.pipe(imgmin())
	.pipe(gulp.dest('./dist/img'));
});

gulp.task('jasminetest', function(){
	gulp.src('./src/spec/test.js')
	.pipe(jasmine());
});

gulp.task('bump', function(){
  gulp.src('./package.json')
  .pipe(bump({version: '1.1.0'}))
  .pipe(gulp.dest('./'));
});

gulp.task('injectversion', function(){
	return gulp.src('src/index.html')
    .pipe(injectVersion())
    .pipe(gulp.dest('dist'));
});

gulp.task('gitadd', function(){
  return gulp.src('./*')
    .pipe(git.add());
});

gulp.task('gitcommit', function(){
  return gulp.src('./*')
    .pipe(git.commit('deploy commit'));
});

gulp.task('gitpush', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('production-deploy', ['sass', 'minify-css', 'imgmin', 'jasminetest', 'bump', 'injectversion', 'gitadd', 'gitcommit', 'gitpush']);

gulp.task('default', function(){
	console.log('gulp has run.');
});