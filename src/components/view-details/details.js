'use strict';

import angular from 'angular';

import ItemDetailsComponent from './details.component'


export default angular.module('details', [])
    .component('viewDetails', new ItemDetailsComponent);