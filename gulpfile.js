var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var cleanCSS = require("gulp-clean-css");
var webpack = require("webpack-stream");
const del = require("del");

/*const cssFiles = [
    './node_modules/normalize.css/normalize.css'
];
const conf = {
	dest: './build'
};*/

let webConfig = {
  output: {
    filename: "script.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};

function styles() {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src("./src/index.js")
    .pipe(webpack(webConfig))
    .pipe(gulp.dest("./build/js/"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./src/**/*.scss", styles);
  gulp.watch("*html", browserSync.reload);
  gulp.watch("./src/**/*.js", scripts);
}

/*function clean() {
	return del(['build/*']);
}*/

gulp.task("styles", styles);
gulp.task("watch", watch);
gulp.task("scripts", scripts);

/*let build = gulp.series(clean,
	                       gulp.parallel(styles, scripts)
	                       );
gulp.task('build', build);
gulp.task('dev', gulp.series('build', 'watch'));*/