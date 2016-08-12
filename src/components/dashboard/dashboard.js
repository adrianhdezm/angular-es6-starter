'use strict';

import angular from 'angular';

import Dashboard from './dashboard.component'


export default angular.module('dashboard', [])
    .component('dashboard', new Dashboard)