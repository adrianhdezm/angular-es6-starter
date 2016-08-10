
'use strict';

import template from './editable-field.template.html';

class EditableFieldComponent {
    constructor(){
        this.template= template;
            this.controller=EditableFieldController;
            this.bindings = {
            fieldValue: '<',
                fieldType: '@?',
                onUpdate: '&'
        }
    }
}


class EditableFieldController {

    constructor() {
        this.editMode = false;
    }

    handleModeChange() {
        if (this.editMode) {
            this.onUpdate({value: this.fieldValue});
            this.fieldValueCopy = this.fieldValue;
        }
        this.editMode = !this.editMode;
    };

    reset() {
        this.fieldValue = this.fieldValueCopy;
    };

    $onInit() {
        // Make a copy of the initial value to be able to reset it later
        this.fieldValueCopy = this.fieldValue;

        // Set a default fieldType
        if (!this.fieldType) {
            this.fieldType = 'text';
        }
    };
}

export default EditableFieldComponent;
