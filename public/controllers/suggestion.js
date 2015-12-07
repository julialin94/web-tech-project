angular
  .module('feelin')
  .controller('SuggestionController', function(suggestion, $location) {
    var vm = this;
    console.log(suggestion);

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: -33.866, lng: 151.196},
      zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
      placeId: suggestion
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        map.setCenter(place.geometry.location);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  });
