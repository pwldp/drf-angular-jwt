/*
    controllers.js
    
    
    ui.router-auth - http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
    
*/
'use strict';
//

var dajCtrls = angular.module('dajCtrls', []);


dajCtrls.controller("ctrlUserPasswordReset", function($scope, $http) {
    $scope.formUserPasswordReset = {};
    $scope.formUserPasswordReset.userEmail = "ala@bla.ola";
    
    
    // process the form
    $scope.processForm = function() {
  
    };
    $scope.processForm = function() {
              console.log($scope.formUserPasswordReset);
        $http({
            method  : 'POST',
            url     : '/users/123/resetPassword',
            data    : $.param($scope.formUserPasswordReset),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function(data) {
            console.log(data);

            if (!data.success) {
                console.log("Sent rrror");
                // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
                console.log("OK");
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        });
        
    };
    
} );
//
//
//
dajCtrls.controller("ctrlUserLogin", function($scope, $http) {
    $scope.formUserLogin = {};
    $scope.formUserLogin.userName = "ala@bla.ola";
    $scope.formUserLogin.userPassword = "Pa22w0rd";
    
    
    // process the form
    $scope.processForm = function() {
  
    };
    $scope.processForm = function() {
        console.log($scope.formUserLogin);
        $http({
            method  : 'POST',
            url     : '/users/login',
            data    : $.param($scope.formUserLogin),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
        .success(function(data) {
            console.log(data);

            if (!data.success) {
                console.log("Sent rrror");
                // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
                console.log("OK");
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        });
        
    };
    
} );

/*
dajCtrls.controller('ctrlUserLogin',
    ['$rootScope', '$scope', '$location', '$window', 'Auth', function($rootScope, $scope, $location, $window, Auth) {
        $scope.rememberme = true;
        $scope.login = function() {
            Auth.login({
                username: $scope.username,
                password: $scope.password,
                rememberme: $scope.rememberme
            },
            function(res) {
                $location.path('/');
            },
            function(err) {
                $rootScope.error = "Failed to login";
            });
        };
        
        $scope.loginOauth = function(provider) {
            $window.location.href = '/auth/' + provider;
        };
}]);
*/

//
// EOF
//