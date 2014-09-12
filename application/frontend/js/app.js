// app.js

'use strict';
//
var dajApp = angular.module('dajApp', 
    ['ui.router','dajCtrls']);

dajApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/static/partials/partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        })
        
        .state('userRegister', {
            url: '/userRegister',
            templateUrl: '/static/partials/partial-userRegister.html'
        })
        
        .state('userLogin', {
            url: '/userLogin',
            templateUrl: '/static/partials/partial-userLogin.html',
//             controller: 'ctrlUserLogin'
        })
        
        .state('userPasswordReset', {
            url: '/userPasswordReset',
            templateUrl: '/static/partials/partial-userPasswordReset.html',
            controller: 'ctrlUserPasswordReset'
        })
        ;
        
});

