'use strict';

import angular from 'angular';

import ItemDetailsComponent from './edit.component'


export default angular.module('edit', [])
    .component('viewEdit', new ItemDetailsComponent);