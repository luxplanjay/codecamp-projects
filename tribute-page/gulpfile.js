'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');
const del = require('del');

const paths = {
  src: {
    html: 'src/*.html',
    css: ['src/sass/core/*.scss', 'src/sass/**/*.scss'],
    img: 'src/img/**/*.+(png|jpg|gif|svg)',
  },
  dist: {
    html: 'dist/',
    css: 'dist/css/',
    img: 'dist/img/',
  },
  watch: {
    html: 'src/**/*.html'
  },
  clean: './dist'
};

const serverConfig = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 9000,
  logPrefix: "NASA",
  notify: false
};

// Assembling .html
gulp.task('bundleHtml', () => {
  gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

// Assembling .scss files
gulp.task('bundleCss', function () {
  return gulp.src(paths.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer({
      browsers: 'last 2 versions',
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({stream: true}));
});

// Optimizing images
gulp.task('bundleImg', function () {
  return gulp.src(paths.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({stream: true}));
});

// Watching for changes in src files
gulp.task('watch', function () {
  gulp.watch(paths.watch.html, ['bundleHtml']);
  gulp.watch(paths.src.css, ['bundleCss']);
  gulp.watch(paths.src.img, ['bundleImg']);
});

// BrowserSync server
gulp.task('webServer', function () {
  browserSync(serverConfig);
});

// Cleaning dist dir
gulp.task('clean:dist', function () {
  return del.sync(paths.clean);
});

// General build task
gulp.task('build', ['bundleHtml', 'bundleCss', 'bundleImg']);

// Default task to run
gulp.task('default', ['clean:dist', 'build', 'webServer', 'watch']);
