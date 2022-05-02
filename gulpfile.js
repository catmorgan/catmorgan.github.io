var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var del = require('del');

function clean (cb) {
	del('dist');
	cb()
}

function style () {
	return gulp
		.src('styles/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("dist"));
}

function build (cb) {
	var b = browserify({debug : true});

	return b
		.transform('babelify',{presets:['es2015','react']})
		.require("scripts/index.js", {entry:true})
		.require("scripts/utilities/sticky-nav.js", {entry:true})
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(gulp.dest("dist"));
}

exports.default = gulp.series(clean, style, build);