var gulp = require('gulp')
var babel = require('gulp-babel')
gulp.task('scripts', function (cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({}))//使用非严格模式为了兼容旧代码
        .pipe(gulp.dest('target'))
        .on('finish', cb)
})
gulp.task('watch', function () {
    //处理未捕获的异常，防止watch退出
    process.on('uncaughtException', function (err) {
        console.log(err)
        console.log(err.stack)
    })
    gulp.watch('src/**/*', function (event) {
        var filePath = event.path
        if (/\.js$/.test(filePath)) {
            gulp.src(filePath)
                .pipe(babel({}))
                .pipe(gulp.dest('target'))
                .on('finish', function () {
                    console.log('done')
                })
        } else {
            gulp.src(filePath, {base: 'src'})
                .pipe(gulp.dest('target'))
        }
    })
})
gulp.task('default', function (cb) {
    //gulpSequence('scripts', cb)
    gulp.run('scripts')
})
//gulp.task('help', function (cb) {
//    console.log('gulp:执行构建(开发环境)')
//    console.log('gulp watch:开发环境使用，配合livereload可以实现实时刷新页面')
//    console.log('gulp -p:执行构建(生产环境)')
//    cb()
//})