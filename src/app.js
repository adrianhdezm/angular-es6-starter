'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';

const app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    AppContent.name
]);

app.config(Routes);
app.config(Middlewares);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
    strictDi: true
    });
});