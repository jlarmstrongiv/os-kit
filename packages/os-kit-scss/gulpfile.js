const gulp = require('gulp');

gulp.task('copy scss', function() {
  return gulp.src(
    [
      'src/**/*.*',
    ],
    { base: './src/', })
    .pipe(gulp.symlink('../os-kit-stencil/src/components/'));
});

gulp.task('watch', function() {
  gulp.watch('**/*.*', gulp.task('copy scss'));
});
