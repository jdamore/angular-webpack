import angular from 'angular';
import status from './status';
import broker from './broker';
import detail from './detail';
import tracker from './tracker';

angular.module('my-app', [])
.component('tracker', tracker)
.component('status', status)
.component('broker', broker)
.component('detail', detail);
