var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: './app'
    });

    gulp.watch('app/assets/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    gulp.src('app/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
