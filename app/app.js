(function() {
  var app = angular.module('shared_heritage_shared_future', []);

  var baseUrl = !(document.location.port) ?
      'http://' + document.location.hostname :
      'http://' + document.location.hostname + ':' + document.location.port;
})();