import angular from 'angular';
import example from './example/example';
import tracker from './tracker/tracker';

angular.module('my-app', [])
.component('example', example)
.component('tracker', tracker);
