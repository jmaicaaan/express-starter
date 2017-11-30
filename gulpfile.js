const gulp = require('gulp');
const gulpTemplate = require('gulp-template');
const gulpRename = require('gulp-rename');
const gulpInsert = require('gulp-insert');
const gulpRemove = require('gulp-delete-lines');
const del = require('del');
const path = require('path');
const yargs = require('yargs');

let root = 'app';
let resolveToHandlers = () => {
  return path.join(root, 'handlers');
};
let resolveToRoutes = () => {
  return path.join(root, 'routes');
}
let handlerRootFile = path.join(resolveToHandlers(), 'index.js');
let routeRootFile = path.join(resolveToRoutes(), 'index.js');
let paths = {
  handler: path.join(__dirname, 'generator', 'handler/*.**'),
  routes: path.join(__dirname, 'generator', 'route/*.**')
};

const cap = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

gulp.task('create-handler-file', () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToHandlers(), name);

  return gulp.src(paths.handler)
    .pipe(gulpTemplate({
      name: name
    }))
    .pipe(gulpRename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath))
});

gulp.task('add-handler', ['create-handler-file'], () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToHandlers());
  const line = `\nexport * from './${name}/${name}.handler';`

  return gulp.src(handlerRootFile)
    .pipe(gulpInsert.append(line))
    .pipe(gulp.dest(destPath))
});

gulp.task('remove-handler', ['remove-handler-folder'], () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToHandlers());
  let regex = new RegExp(name, 'gi');

  return gulp.src(handlerRootFile)
    .pipe(gulpRemove({
      'filters': [
        regex
      ]
    }))
    .pipe(gulp.dest(destPath))
});

gulp.task('remove-handler-folder', (cb) => {
  const name = yargs.argv.name;
  const handlerFolder = path.join(resolveToHandlers(), name);
  del([handlerFolder]).then((paths) => {
    cb();
  });
});


/************************* Route tasks **************************/

gulp.task('create-route-file', () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToRoutes(), name);

  return gulp.src(paths.routes)
    .pipe(gulpTemplate({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(gulpRename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('add-route', ['create-route-file'], () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToRoutes());
  const line = `\nexport * from './${name}/${name}.route';`

  return gulp.src(routeRootFile)
    .pipe(gulpInsert.append(line))
    .pipe(gulp.dest(destPath))
});

gulp.task('remove-route', ['remove-route-folder'], () => {
  const name = yargs.argv.name;
  const destPath = path.join(resolveToRoutes());
  let regex = new RegExp(name, 'gi');

  return gulp.src(handlerRootFile)
    .pipe(gulpRemove({
      'filters': [
        regex
      ]
    }))
    .pipe(gulp.dest(destPath))
});

gulp.task('remove-route-folder', (cb) => {
  const name = yargs.argv.name;
  const routeFolder = path.join(resolveToRoutes(), name);
  del([routeFolder]).then((paths) => {
    cb();
  });
});