var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon');

gulp.task('styles', function() {
    gulp.src('style/**')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('app/css/'));
});

var vendorCSS = [
    "bower_components/semantic/build/packaged/css/semantic.min.css",
];

var vendorScripts = [
    "bower_components/jquery/dist/jquery.min.js",
    "bower_components/semantic/build/packaged/javascript/semantic.min.js",
    "bower_components/angular/angular.min.js",
    "bower_components/angular-resource/angular-resource.min.js",
    "bower_components/angular-route/angular-route.min.js",
    "bower_components/angular-animate/angular-animate.min.js",
];

var appScripts = [
    'static/js/app.js',
    'static/js/animations.js',
    'static/js/controllers.js',
    'static/js/filters.js',
    'static/js/services.js'
];

gulp.task('concatCSS', function() {
    gulp.src(vendorCSS)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('concatJS', function() {
    gulp.src(vendorScripts)
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('app/js/'));
    gulp.src(appScripts)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/'));
});

gulp.task('develop', function() {
    process.env.NODE_ENV = 'dev';
    nodemon({
        script: 'server.js',
        ext: 'jade less js',
        ignore: ['node_modules/', 'test/']
    })
        .on('change', ['styles'])
        .on('restart', function() {
            console.log('restarted');
        });
});

gulp.task('default', ['styles', 'concatCSS', 'concatJS']);
