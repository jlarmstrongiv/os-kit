const gulp = require('gulp');

const atomsPath = 'src/atoms/**/*.scss';
const moleculesPath = 'src/molecules/**/*.scss';
const globalsPath = 'src/globals/**/*.scss';

gulp.task('copy-atoms', function() {
  return gulp.src(
    atomsPath,
    { base: './src/', }
  )
    .pipe(gulp.symlink('../os-kit-stencil/src/components/'));
});
gulp.task('copy-molecules', function() {
  return gulp.src(
    moleculesPath,
    { base: './src/', }
  )
    .pipe(gulp.symlink('../os-kit-stencil/src/components/'));
});
gulp.task('copy-globals', function() {
  return gulp.src(
    globalsPath,
    { base: './src/globals/', }
  )
    .pipe(gulp.symlink('../os-kit-stencil/src/globals/scss/'));
});

gulp.task('watch', function() {
  gulp.watch(atomsPath, { ignoreInitial: false, }, gulp.task('copy-atoms'));
  gulp.watch(moleculesPath, { ignoreInitial: false, }, gulp.task('copy-molecules'));
  gulp.watch(globalsPath, { ignoreInitial: false, }, gulp.task('copy-globals'));
});
