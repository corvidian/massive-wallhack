var app = angular.module('massiveWallhackApp');

app.directive('cbox', function() {
  return {
    restrict: 'AE',
    /*    replace: 'true',*/
    scope: {
      courses:'=',
      check: '=',
      click:'='
    },
    templateUrl: 'views/box.html'
  };
});

app.directive('eventtable', function() {
  return {
    restrict: 'AE',
    /*    replace: 'true',*/
    scope: {
      events:'='
    },
    templateUrl: 'views/event_table.html'
  };
});