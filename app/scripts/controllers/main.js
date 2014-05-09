'use strict';

var app = angular.module('massiveWallhackApp');

app.controller('MainCtrl', function ($scope, Courses, Uuid, Calendar) {
  $scope.events = {};
  $scope.eventKeys = [];
  $scope.uuid = Uuid.generate();
  $scope.calLink = Calendar.getLink($scope.uuid);
  $scope.showEvents = false;
  Courses.all().success(function (data, status, headers, config) {
    console.log(data);
    $scope.courses = data;
  });

  /*
  Calendar.get("sa").success(function(data,status, headers, config){
    console.log(data);
    console.log(status);
    console.log(headers);
    console.log(config);
  });
*/

  $scope.addOrRemoveFromEvents = function (checked, course) {
    if (checked) {
      course.lectures.forEach(function (lecture) {
        delete $scope.events[lecture.event_id];
      });
    }

    else {
      course.lectures.forEach(function (lecture) {
        lecture.name = course.name + " luento";
        $scope.events[lecture.event_id] = lecture;
      });
    }

    $scope.eventKeys = Object.keys($scope.events);

    Calendar.create($scope.uuid, $scope.events).success(function(data,status, headers, config){
      console.log(data);
      console.log(status);
      console.log(headers);
      console.log(config);
      $scope.showEvents = true;
    });
  }
});