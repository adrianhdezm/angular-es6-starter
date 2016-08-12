'use strict';

import angular from 'angular';

import Dashboard from './dashboard.component'


export default angular.module('dashboard', [])
    .component('viewDashboard', new Dashboard)