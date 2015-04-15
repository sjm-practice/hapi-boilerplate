var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('lint', function () {
    return gulp.src(['./server.js', './server/**/*.js'])
        .pipe(jshint({ node: true }))
        .pipe(jshint.reporter('default'));
});

gulp.task('min', function () {
    var assets = require('./server/assets/assets');

    // change working directory to public
    var gulpFileCwd = __dirname + '/public';
    process.chdir(gulpFileCwd);
    util.log('Working directory changed to', util.colors.magenta(gulpFileCwd));

    // concat and minify your css
    gulp.src(assets.development.css)
        .pipe(concat('styles.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./css/'));

    // concat and minify your js
    return gulp.src(assets.development.js)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});