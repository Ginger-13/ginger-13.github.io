var gulp         = require('gulp');
var compass      = require('gulp-compass');
var minifyCSS    = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var svg          = require('gulp-inject-svg');


gulp.task('css', function() {
    gulp.src('./sass/style.sass')
        .pipe(compass({
            css: 'css/',
            sass: 'sass'
        }))
        .pipe(minifyCSS())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./sass/*.sass', ['css']);
    gulp.watch('./sass/**/*.sass', ['css']);
    gulp.watch('./html/*.sass', ['svg']);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
});

var injectSvgOptions = { base: './' };
gulp.task('svg', function() {
    return gulp.src('./html/*.html')
        .pipe(svg(injectSvgOptions))
        .pipe(gulp.dest('./'));
});