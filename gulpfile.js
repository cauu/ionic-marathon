//This file will process all of the assets in the 'src' folder,
//combines them into 'build' folder as a finished app

//1. LIBRARIES
//------------
var gulp = require('gulp');
var Server = require('karma').Server;
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var rimraf = require('rimraf');
var router = require('front-router');
var sequence = require('run-sequence');

//Check for --production flag
var isProduction = !!(argv.production);

//2. FILE PATHS
//------------

var paths = {
    //Include js, html and scss files
    assets: [
      './src/**/*.*',
      '!./src/{scss,js,views,templates}/*.*',
      '!./src/js/**/*.*',
    ],
    // Sass will check these folders for files when you @import
    sass: [
      './src/scss',
      './bower_components/font-awesome/scss',
      './bower_components/ionic/scss'
    ],
    libs: [
      'bower_components/ionic/release/js/ionic.bundle.js',
      'bower_components/oclazyload/dist/ocLazyLoad.js',
      'bower_components/angular-base64/angular-base64.js',
      'bower_components/angular-md5/angular-md5.js',
      'bower_components/moment/moment.js',
      'bower_components/moment-range/dist/moment-range.js',
      'bower_components/localforage/dist/localforage.min.js'
    ],
    //These files are for your app's Javascript
    //Remember to refresh this list when adding new files
    appJS: [
        './src/js/app.js',
        './src/js/**/main.js',
        './src/js/services/*.js',
        './src/js/**/*.js'
    ]
};

//3. TASKS
//--------
//
/**
 * * Run test case once and exit
 * */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done).start();
});

//Cleans the build directory
//Clean means delete all files in build directory
//rimraf is the node module for 'rm -rf' command
gulp.task('clean', function(cb) {
    rimraf('./build', cb);
});

//Copies everything in the client folder except templates, sass and js
gulp.task('copy', function() {
    return gulp.src(paths.assets, {
        base: './src/'
    })
      .pipe(gulp.dest('./build'));
});

gulp.task('copy:templates', function(cb) {
    gulp.src('./src/templates/*.html')
      .pipe($.ngHtml2js({
          prefix: 'templates/',
          moduleName: 'app',
          declareModule: false
      }))
      .pipe($.uglify())
      .pipe($.concat('templates.js'))
      .pipe(gulp.dest('./build/js'));

    cb();
});

gulp.task('copy:views', function(cb) {
    gulp.src('./src/views/*.html')
      .pipe($.ngHtml2js({
          prefix: 'views/',
          moduleName: 'app',
          declareModule: false
      }))
      .pipe($.uglify())
      .pipe($.concat('views.js'))
      .pipe(gulp.dest('./build/js'));

    cb();
});

// Compiles Sass
gulp.task('sass', function () {
  return gulp.src('src/scss/app.scss')
    .pipe($.sass({
      includePaths: paths.sass,
      outputStyle: (isProduction ? 'compressed' : 'nested'),
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10']
    }))
    .pipe(gulp.dest('./build/css/'))
  ;
});

// Compiles and copies the Libs for Apps JavaScript, as well as your app's custom JS
gulp.task('uglify', ['uglify:libs', 'uglify:app'])

gulp.task('uglify:libs', function(cb) {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.libs)
    .pipe(uglify)
    .pipe($.concat('libs.js'))
    .pipe(gulp.dest('./build/js/'))
  ;
});

gulp.task('uglify:app', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.appJS)
    .pipe(uglify)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('./build/js/'))
  ;
});

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server', ['build'], function() {
  gulp.src('./build')
    .pipe($.webserver({
      port: 8079,
      host: 'localhost',
      fallback: 'index.html',
      livereload: true,
      open: true
    }))
  ;
});
//Builds your entire app once, without starting a server
gulp.task('build', function(cb) {
  sequence('clean', ['copy', 'sass', 'uglify'], 'copy:templates', 'copy:views', cb);
});

//Default task: build your app, starts a server and recompile assets 
//when they changed
gulp.task('default', ['server'], function () {
  // Watch Sass
  gulp.watch(['./src/scss/**/*', './scss/**/*'], ['sass']);

  // Watch JavaScript
  gulp.watch(['./src/js/**/*', './js/**/*'], ['uglify:app']);

  // Watch static files
  gulp.watch(['./src/**/*.*', '!./src/views/**/*.*', '!./src/{scss,js}/**/*.*'], ['copy']);

  gulp.watch(['./src/templates/*.html'], ['copy:templates']);

  gulp.watch(['./src/views/*.html'], ['copy:views']);
});
