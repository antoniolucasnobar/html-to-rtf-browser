const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('tests', () =>
    gulp.src('./app/src/**/*.test.js', { read: false })
        .pipe(mocha({ reporter: 'nyan' }))
);
