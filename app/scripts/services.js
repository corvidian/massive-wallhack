var app = angular.module('massiveWallhackApp');

app.factory('Courses', function($http) {
  var URL = 'http://localhost:3000/courses.json';

  var coursesService = {};
  coursesService.all = function() {
    return $http.get(URL);
  };

  return coursesService;
});

app.factory('Calendar', function($http) {
  var baseURL = 'http://localhost:3001/';
  var calendarService = {};

  function link(uuid) {
    return baseURL + uuid + ".ics";
  }

  calendarService.create = function(uuid, events) {
    var event_list = {};
    event_list.uid = uuid;
    event_list.events = [];

    console.log( Object.keys(events));
    Object.keys(events).forEach(function (eventId) {
      var event = {};
      event.start = events[eventId].start;
      event.length = events[eventId].length;
      event.name = events[eventId].name;
      event.place = events[eventId].place;
      console.log(event);
      event_list.events.push(event);
    });

    console.log(event_list);
    console.log(JSON.stringify(event_list));
    return $http.post(baseURL + "event_lists.json", event_list);
  };

  calendarService.get = function(uuid) {
    return $http.get(link(uuid));
  }

  calendarService.getLink = function(uuid) {
    return link(uuid);
  }

  return calendarService;
});

app.factory('Uuid', function() {
  var fmt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  var uuidService = {};

  uuidService.generate = function() {
    /**! http://stackoverflow.com/a/2117523/377392 */
    return fmt.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };

  return uuidService;
});