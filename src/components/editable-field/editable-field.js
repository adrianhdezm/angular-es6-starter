'use strict';

import angular from 'angular';

import EditableFieldComponent from './editable-field.component'


export default angular.module('editableField', [])
    .component('editableField', new EditableFieldComponent);