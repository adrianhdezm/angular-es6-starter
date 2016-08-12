'use strict';

import angular from 'angular';

import ListItemComponent from './list-item.component'


export default angular.module('listItem', [])
    .component('listItem', new ListItemComponent);