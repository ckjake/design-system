var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass');
    browserSync   = require('browser-sync').create();

// ////////////////////
// HTML Tasks
// ////////////////////
gulp.task('html', function () {
   gulp.src('src/*.html')
  .pipe(gulp.dest('dist/'));

});

// ////////////////////
// Styles Tasks
// ////////////////////

gulp.task('styles', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))

    .pipe(browserSync.stream());
});

// ////////////////////
// Scripts Tasks
// ////////////////////

gulp.task('scripts', function (){
  gulp.src('src/js/*.js')
  // .pipe(rename({suffix:'.min'}))
  // .pipe(uglify().on('error', function(e){
  //   console.log(e);
  // }))
  .pipe(gulp.dest('dist/js'));
});
//
// ////////////////////
// Images Tasks
// ////////////////////
gulp.task('image', function(){
  gulp.src('src/img/*')
  // .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
});

// // ////////////////////
// // Fonts Task
// // ////////////////////
// gulp.task('ttf2woff', function(){
//   gulp.src('src/fonts/*.ttf')
//   .pipe(ttf2woff())
//   .pipe(gulp.dest('dist/fonts'));
// });

// ////////////////////
// Watch & Serve Tasks
// ////////////////////

gulp.task('serve', ['styles'], function(){
  browserSync.init({
    server: './dist'
  });

  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('src/*.html',['html']);
  gulp.watch('src/*/*.html',['html']);
  gulp.watch('dist/*.html').on('change', browserSync.reload);

});

// ////////////////////
// Default Tasks
// ////////////////////
gulp.task('default', ['html', 'styles', 'image', 'scripts', 'serve']);
