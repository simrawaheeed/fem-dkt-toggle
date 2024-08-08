//Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const fs = require('fs');
const browsersync = require('browser-sync').create();
// Use dart-sass for @use
//sass.compiler = require('dart-sass');
async function asyncAwaitTask() {
    const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log(version);
    await Promise.resolve('some result');
  }
// Sass Task
function scssTask(cb) {
    return src('app/scss/styles.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.' }));
    cb();   
}

// Javascript Task
function jsTask(cb) {
    return src('app/js/scirpt.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
    cb();
}

// Browesersync
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}
function browserSyncReLoad(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch('*.html', browserSyncReLoad);
    watch(
        ['app/scss/**/*.scss', 'app/**/*.js'],
        series(scssTask, jsTask, browserSyncReLoad)
    );
}

// Default Gulp Task
exports.default = asyncAwaitTask;
exports.default = (scssTask, jsTask, browserSyncServe, watchTask);

