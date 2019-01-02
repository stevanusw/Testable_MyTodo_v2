/// <binding AfterBuild='default' />
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
    src: [
       'scripts/src/*.js'
    ]
};

gulp.task('debug', function () {
});

gulp.task('release', function () {
    return gulp.src(paths.src)
        .pipe(concat('mytodo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('scripts/dist'));
});

gulp.task('build', gulp.parallel('debug', 'release'));

gulp.task('default', gulp.parallel('build'));