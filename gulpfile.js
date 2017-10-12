const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  mini = require('gulp-uglify'),
  sass = require('gulp-sass'),
  cat = require('gulp-concat'),
  norm = require('node-normalize-scss'),
  bs = require('browser-sync').create(),
  autoprefixer = require('gulp-autoprefixer');

/*TOP LEVEL FUNCTIONS REMINDER
gulp.task - DEFINE TASKS
gulp.src - POINT TO FILES TO USE
gulp.dest - POINT TO FOLDER TO OUTPUT
gulp.watch - WATCH FILES & FOLDERS FOR CHANGES
*/

// [gulp] - runs my default array of tasks
gulp.task('default', ['copyhtml', 'scripts', 'imagemin', 'sass']);

// [watch] - watches specified files for changes & runs tasks attached
gulp.task('watch', function() {
  bs.init({
    server: {
      baseDir: "dist"
    }
  });
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/assets/images/*', ['imagemin']);
  gulp.watch('src/assets/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyhtml']);
  gulp.watch('dist/*.html', function() {
    bs.reload()
  });
});

gulp.task('sassqwatch', function() {
  gulp.watch('src/assets/sass/*.scss', ['sass']);
});

// [copyhtml] - Copies files from one location to another
gulp.task('copyhtml', () =>
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'))
);

// [imagemin] - Optimizes images
gulp.task('imagemin', () =>
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/assets/images'))
);

// [mini] - Minify jscripts
gulp.task('mini', () =>
  gulp.src('src/scripts/*.js')
  .pipe(mini())
  .pipe(gulp.dest('dist/scripts'))
);

// [sass] - Runs Sass & autopfx, injects CSS into browsersync
gulp.task('sass', function() {
  return gulp.src('src/assets/sass/*.scss')
    .pipe(sass({
      includePaths: norm.includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(bs.stream());
});

// [scripts] - Concats all scripts into a main.js
gulp.task('scripts', () =>
  gulp.src('src/scripts/*.js')
  .pipe(cat('main.js'))
  .pipe(mini())
  .pipe(gulp.dest('dist/js'))
);
