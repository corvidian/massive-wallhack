'use strict';

var app = angular.module('massiveWallhackApp');

app.controller('MainCtrl', function ($scope, Courses) {
  $scope.events = {};
  $scope.eventKeys = [];
  Courses.all().success(function (data, status, headers, config) {
    console.log(data);
    $scope.courses = data;
  });

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

    Object.keys($scope.events).forEach(function (eventId) {
      console.log($scope.events[eventId]);
    });
    console.log(Object.keys($scope.events));
  }
});