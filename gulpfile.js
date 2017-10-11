const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const mini = require('gulp-uglify');
const sass = require('gulp-sass');
const cat = require('gulp-concat');

/*TOP LEVEL FUNCTIONS REMINDER
gulp.task - DEFINE TASKS
gulp.src - POINT TO FILES TO USE
gulp.dest - POINT TO FOLDER TO OUTPUT
gulp.watch - WATCH FILES & FOLDERS FOR CHANGES
*/

// [gulp] - runs my default array of tasks
gulp.task('default', ['say', 'copyhtml', 'scripts', 'imagemin', 'sass']);

// [watch] - watches specified files for changes & runs tasks attached
gulp.task('watch', function(){
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/assets/images/*', ['imagemin']);
  gulp.watch('src/assets/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyhtml']);
});

// [say] - Logs Message
gulp.task('say', function(){
  return console.log('Gulp is running...');
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

// [sass] - Runs CSS compiler through SASS
gulp.task('sass', () =>
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'))
);

// [scripts] - Concats all scripts into a main.js
gulp.task('scripts', () =>
  gulp.src('src/scripts/*.js')
  .pipe(cat('main.js'))
  .pipe(mini())
  .pipe(gulp.dest('dist/js'))
);
