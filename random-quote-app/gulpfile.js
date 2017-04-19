'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  cssnano = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  browserSync = require('browser-sync'),
  del = require('del'),
  sassGlobImport = require('gulp-sass-glob-import'),
  rigger = require('gulp-rigger'),
  babel = require("gulp-babel");

var paths = {
  src: {
    html: 'src/*.html',
    js: 'src/js/**/*.js',
    cssGlobalImport: 'src/sass/core/tools/',
    css: ['src/sass/core/*.scss', 'src/sass/**/*.scss'],
    img: 'src/img/**/*.+(png|jpg|gif|svg)',
    fonts: 'src/fonts/**/*.*'
  },
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  watch: {
    html: 'src/**/*.html'
  },
  clean: './build'
};

var serverConfig = {
  server: {
    baseDir: "./build"
  },
  host: 'localhost',
  port: 9000,
  logPrefix: "Over9000"
};

// Assembling .html
gulp.task('bundleHtml', function () {
  gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.build.html))
    .pipe(browserSync.reload({stream: true}));
});

// Assembling .scss files
gulp.task('bundleCss', function () {
  return gulp.src(paths.src.css)
    .pipe(sassGlobImport())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [paths.src.cssGlobalImport, 'node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'IE 9'],
      cascade: true
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build.css))
    .pipe(browserSync.reload({stream: true}));
});

// Assembling .js files
gulp.task('bundleJs', function () {
  return gulp.src(paths.src.js)
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env', 'es2015']
    }))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
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
    .pipe(gulp.dest(paths.build.img))
    .pipe(browserSync.reload({stream: true}));
});

// Bundling fonts
gulp.task('bundleFonts', function () {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
});

// Watching for changes in src files
gulp.task('watch', function () {
  gulp.watch(paths.watch.html, {cwd: './'}, ['bundleHtml']);
  gulp.watch(paths.src.css, {cwd: './'}, ['bundleCss']);
  gulp.watch(paths.src.js, {cwd: './'}, ['bundleJs']);
  gulp.watch(paths.src.img, ['bundleImg']);
  gulp.watch(paths.src.fonts, ['bundleFonts']);
});

// BrowserSync server
gulp.task('webServer', function () {
  browserSync(serverConfig);
});

// Cleaning build dir
gulp.task('clean:build', function () {
  return del.sync(paths.clean);
});

// General build task
gulp.task('build', ['bundleHtml', 'bundleCss', 'bundleJs', 'bundleFonts', 'bundleImg']);

// Default task to run
gulp.task('default', ['clean:build', 'build', 'webServer', 'watch']);
