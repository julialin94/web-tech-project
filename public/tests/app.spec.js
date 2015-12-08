describe("app", function() {
  it('should map routes to controllers', function() {
  module('feelin');

  inject(function($route) {

    expect($route.routes['/'].controller).toBe('ChooseController');
    expect($route.routes['/'].templateUrl).
      toEqual('/templates/choose.html');

    expect($route.routes['/suggestion/:id'].controller).toBe('SuggestionController');
    expect($route.routes['/suggestion/:id'].templateUrl).
      toEqual('/templates/suggestion.html');

    // otherwise redirect to
    expect($route.routes[null].redirectTo).toEqual('/');
  });
  });
});
