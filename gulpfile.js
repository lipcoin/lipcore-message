'use strict';

var gulp = require('gulp');
var lipcoreTasks = require('lipcore-build');

lipcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
