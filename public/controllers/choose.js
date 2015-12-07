angular
  .module('feelin')
  .controller('ChooseController', function(places, $location) {
    var vm = this;

    vm.sendRequest = function(activity) {
      places.search(activity).then(function(placeId) {
        console.log(placeId);
        $location.path('/suggestion/' + placeId);
      });
    };
  });
