'use strict';

angular.module('massiveWallhackApp')
  .controller('MainCtrl', function ($scope, Courses) {

    Courses.all().success(function(data, status, headers, config) {
        console.log(data);
        $scope.courses = data;
      });
    });