'use strict';

import angular from 'angular';
import ngRoute from 'angular-route'

import template from './view2.tpl.html';

var view2Module = angular.module('view2', [ngRoute]);

class View2Ctrl{
    constructor() {
        this.name = "View2";
    }
}


view2Module
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            template: template,
            controller: 'View2Ctrl',
            controllerAs: 'view2'
        });
    }])
    .controller('View2Ctrl', View2Ctrl);



export default view2Module;

