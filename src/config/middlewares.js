'use strict';

middlewares.$inject = ['$httpProvider','$qProvider'];
export default function middlewares($httpProvider,$qProvider){

    let $q = $qProvider.$get();

    //  register the interceptors via an anonymous factory
    $httpProvider.interceptors.push(() => {
        return {
            // optional method
            'request': (config) => {
                // do something on success
                return config;
            },

            // optional method
            'requestError': (rejection) => {
                // do something on error
                return $q.reject(rejection);
            },

            // optional method
            'response': (response) =>  {
                // do something on success
            return response;
            },

            // optional method
            'responseError': function(rejection) {
                // do something on error
                return $q.reject(rejection);
            }
        }
    });

}