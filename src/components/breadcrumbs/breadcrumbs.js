'use strict';

import angular from 'angular';

import BreadcrumbsComponent from './breadcrumbs.component';

export default angular.module('breadcrumbs', [])
    .component('breadcrumbs', new BreadcrumbsComponent);