import angular from 'angular';
import exampleParent from './example-parent/exampleParent';

export default angular.module('app', [])
  .component('exampleParent', exampleParent)