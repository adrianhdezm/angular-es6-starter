'use strict';

import template from './app-header.template.html';
import './app-header.style.css';

class AppHeaderComponent {
    constructor(){
        this.controller = ComponentController;
        this.template = template;

    }

    static get name() {
        return 'appHeader';
    }


}

class ComponentController{
    constructor(){

    }

}


export default AppHeaderComponent;