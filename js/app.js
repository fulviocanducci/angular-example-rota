var app = angular.module('app', ['ngRoute']);
var focus = function(element)
{
    document.getElementById(element).focus();    
}
    app.config(function($routeProvider, $locationProvider){        
        $routeProvider
        .when('/', {
            templateUrl: 'template/index.html',
            controller: 'indexCtrl'
        })
        .when('/create', {
            templateUrl: 'template/create.html',
            controller: 'createCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });        
    });

    app.controller("indexCtrl", ["$scope", "$location", function($scope, $location)
    {
        /*$scope.gocreate = function()
        {
             $location.path('/create');
        }*/

    }]);

    app.controller("createCtrl", ["$scope", "$location", function($scope, $location)
    {   
        focus("nm");
        $scope.nome = "";
        $scope.sobrenome = "";
    }]);