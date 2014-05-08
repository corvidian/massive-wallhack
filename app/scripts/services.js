var app = angular.module('massiveWallhackApp');

app.factory('Courses', function($http) {
    var URL = 'http://localhost:3000/courses.json';

    var coursesService = {};
    coursesService.all = function() {
        return $http.get(URL);
    }

    return coursesService;
});