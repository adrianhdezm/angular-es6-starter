'use strict';

import angular from 'angular';

import view1 from './../view1/view1';
import view2 from './../view2/view2';

import template from './container.tpl.html';


let container = () => {
    return {
        restrict: 'E',
        template: template,
        controller: 'ContainerCtrl',
        controllerAs: 'container'
    }
};

class ContainerCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}


var containerModule = angular.module('container', [
    view1.name,
    view2.name
]);


containerModule.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});

}]);

containerModule
    .controller('ContainerCtrl', ContainerCtrl)
    .directive('container', container);



export default containerModule;