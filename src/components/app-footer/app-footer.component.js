'use strict';

import template from './app-footer.template.html';
import './app-footer.style.css';


class AppFooterComponent {
    constructor(){
        this.controller = ComponentController;
        this.template = template;

    }

    static get name() {
        return 'appFooter';
    }


}

class ComponentController{
    constructor(){
        this.year = new Date().getFullYear();
    }

}


export default AppFooterComponent;