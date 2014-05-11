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
    $scope.courses = data.courses;
  });

  $scope.addOrRemoveFromEvents = function (checked, course, group) {
    if (checked) {
      group.exercises.forEach(function (lecture) {
        lecture.name = course.name + " " + group.name;
        $scope.events[lecture.event_id] = lecture;
      });
    }

    else {
      group.exercises.forEach(function (lecture) {
        delete $scope.events[lecture.event_id];
      });
    }

    $scope.eventKeys = Object.keys($scope.events);

    Calendar.create($scope.uuid, $scope.events).success(function (data, status, headers, config) {
      console.log(data);
      console.log(status);
      console.log(headers);
      console.log(config);
      $scope.showEvents = true;
    });
     
  }
});