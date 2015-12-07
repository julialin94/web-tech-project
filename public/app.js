angular
  .module('feelin', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/choose.html',
        controller: 'ChooseController',
        controllerAs: 'vm'
      })
      .when('/suggestion/:id', {
        templateUrl: '/templates/suggestion.html',
        controller: 'SuggestionController',
        controllerAs: 'vm',
        resolve: {
          suggestion: function($http, $route, $location) {
            var id = $route.current.params.id;
            return id;
          }
        }
      })
      .otherwise({
        redirectTo:'/'
      });
  });
