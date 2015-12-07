angular
  .module('feelin')
  .factory('places', function($http, $q) {
    return {
      search: function(activity) {

// //Variable Declarations
        var map;
        var service;
        var infowindow;

// //Function Declarations
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(setPosition);
            }
            else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function setPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            findSuggestion(activity, lat, lon).then(function(suggestionId) {
              jDeferred.resolve(suggestionId);
            });
        }

        function findSuggestion(activity, lat, lon) {
          var deferred = $q.defer();
          initialize(function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              if (results.length > 0) {
                var random = Math.floor(Math.random()*results.length);
                var item = results[random];
                console.log(item);
                deferred.resolve(item.place_id);
              }
              else deferred.resolve(null);
            }
          }, activity, lat, lon);
          return deferred.promise;
        }

        function initialize(callback, activity, lat, lon) {
          var center = new google.maps.LatLng(lat, lon);
          var map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: center,
            zoom: 15
          });

          var request = {
            location: center,
            radius: '500',
            query: ''+activity
          };
          service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);
        }

// //Calls

        var jDeferred = $q.defer();
        getLocation();
        return jDeferred.promise;


      }
    };
  });
