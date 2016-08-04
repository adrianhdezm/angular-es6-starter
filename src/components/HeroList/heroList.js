'use strict';


import template from './heroList.tpl.html';

class HeroListCtrl{
    constructor() {

        this.list =[
            {
                name: 'Superman',
                location: ''
            },
            {
                name: 'Batman',
                location: 'Wayne Manor'
            }
        ];
    }

    update(hero, prop, value) {
        hero[prop] = value;
    };

    delete(hero) {
        var idx = this.list.indexOf(hero);
        if (idx >= 0) {
            this.list.splice(idx, 1);
        }
    };

};


export default {
    template: template,
    controller: HeroListCtrl
}