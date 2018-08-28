'use strict'
const TARGET_PATH = 'src/css'//目标路径
const TARGET_NAME = 'my-ui'//生成文件名称

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var rename = require('gulp-rename')
var cssmin = require('gulp-cssmin')
var del = require('del')

gulp.task('clean', function (cb) {
  del([`${TARGET_PATH}`], cb)
})
gulp.task('compile', function (cb) {
  return gulp.src('./packages/style/index.scss')
    .pipe(sass.sync())
    .pipe(rename({basename: TARGET_NAME}))
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(TARGET_PATH))
    .pipe(cssmin())
    .pipe(rename({basename: TARGET_NAME, extname: '.min.css'}))
    .pipe(gulp.dest(TARGET_PATH))
})
gulp.task('copyfont', function () {
  return gulp.src('./packages/style/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest(`./${TARGET_PATH}/fonts`))
})

gulp.task('build', ['compile'])
