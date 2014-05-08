'use strict';

angular.module('massiveWallhackApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://localhost:3000/courses.json').success(function(data, status, headers, config) {
        console.log(data);
        $scope.courses = data;
      });
  });
