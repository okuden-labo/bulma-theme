var gulp = require('gulp');
var rename = require('gulp-rename');
var hb = require('gulp-hb'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browser = require('browser-sync'),
    minify = require('gulp-clean-css'),
    del = require("del"),
    runSequence = require('run-sequence');

var st_dest = "docs/",
    st_root = "/gt/",
    st_src = "src/";

gulp.task('html', function() {
  //各ページとなるファイルの場所を指定する
  return gulp.src( st_src + 'pages/**/*.hbs')
    .pipe(hb({
      data: st_src + 'data/**/*.{js,json}',
      helpers: [
        //継承を可能にするヘルパーを指定する
        './node_modules/handlebars-layouts/dist/handlebars-layouts.js'
      ],
      //インクルードや継承するための雛形の設置場所を指定する
      partials: st_src + 'partials/**/*.hbs',
      bustCache: true
    }))

    // .pipe(yaml({ space: 2 }))
    //拡張子をhbsからhtmlに変更する
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    //出力先を選択する
    .pipe(gulp.dest( st_dest ));
});

// SASS -> CSSビルド -> CSS prefix & minify
gulp.task('css', function(){
  return gulp.src([ st_src + 'assets/sass/*.sass'])
          .pipe(plumber())
     // .pipe(plumber({
     //   errorHandler: notify.onError("Error: <%= error.message %>")
     // }))
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(gulp.dest( st_src + 'assets/css'))
    .pipe(minify())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest( st_src + 'assets/css'));
    // .pipe(browser.reload({stream:true}));
});

gulp.task('copy', function() {
    return gulp.src( st_src + 'assets/**')
               .pipe(gulp.dest( st_dest + 'assets'));
 });

gulp.task('clean', function (callback) {
  return del([ st_dest + 'assets/sass'], callback);
});

gulp.task('csscopy', function() {
    runSequence('css', 'copy' ,'clean');
  });

//browser sync
gulp.task('server', function() {
    browser({
        server: {
            baseDir: st_dest
        },
        port: 5000
    });
});

 gulp.task('default', ['html', 'css', 'copy' ,'clean' ,'csscopy' ,'server']);
 gulp.task('sass', ['css', 'copy' ,'clean' ,'csscopy']);