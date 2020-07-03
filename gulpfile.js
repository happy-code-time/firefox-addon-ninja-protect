const gulp = require('gulp');

const del = require('del');

const runSequence = require('gulp4-run-sequence');

const imagemin = require('gulp-imagemin');

const imageminJpegRecompress = require('imagemin-jpeg-recompress');

/**
 * Clean
 */
gulp.task('clean', function (done) {
    del.sync([
        './Distribution/**/*',
    ],
        {
            dot: true
        });
    done();
});

/**
 * Copy files
 */
gulp.task('copy:files', function (done) {
    gulp.src(['./Source/Background/background.js']).pipe(gulp.dest('./Distribution/Background/'));
    gulp.src(['./Source/Content/content.js']).pipe(gulp.dest('./Distribution/Content/'));
    gulp.src(['./Source/Popup/index.html']).pipe(gulp.dest('./Distribution/Popup/'));
    gulp.src(['./Source/Dashboard/index.html']).pipe(gulp.dest('./Distribution/Dashboard/'));
    gulp.src(['./Source/DangerCount/index.html']).pipe(gulp.dest('./Distribution/DangerCount/'));
    gulp.src(['./Source/DangerUrl/index.html']).pipe(gulp.dest('./Distribution/DangerUrl/'));
    gulp.src(['./Source/AppFiles/static/css/**/*']).pipe(gulp.dest('./Distribution/Static/css/'));
    gulp.src(['./Source/Dashboard/extendedblacklist.txt']).pipe(gulp.dest('./Distribution'));
    gulp.src(['./Source/Dashboard/extendedpornlist.txt']).pipe(gulp.dest('./Distribution'));
    done();
});

gulp.task('compress:images', function () {
    return gulp.src('Source/Images/*.{png,jpg,jpeg,gif,ico}')
        .pipe(imagemin( 
            [
                imagemin.gifsicle(),
                imagemin.jpegtran(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest('logo'))
});


gulp.task('compile', function (callback) {
    runSequence(
        [
            'clean',
            'copy:files',
            'compress:images'
        ],
        callback);
});