var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('clean',function(){
	del('dist');
});

gulp.task('sass', function(){
	return gulp.src('assets/styles/index.scss')
		.pipe(sass().on('error', sass.logError))
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

gulp.task('default',['clean','sass','build']);