var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('clean',function(){
	del('dist');
});

gulp.task('root', function(){
	return gulp.src('index.html')
		.pipe(gulp.dest("dist"));
});

gulp.task('styles', function(){
	return gulp.src('styles/index.css')
		.pipe(gulp.dest("dist"));
});

gulp.task('build', function(){
	return bundle = browserify({debug : true})
		.transform('babelify',{presets:['es2015','react']})
		.require("scripts/index.js", {entry:true})
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(gulp.dest("dist"));
});

gulp.task('default',['clean','root','styles','build']);