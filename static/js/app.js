var peAuctionApp = angular.module('peAuctionApp', [
  'ngRoute',
  'peAuctionAnimations',

  'peAuctionControllers',
  'peAuctionFilters',
  'peAuctionServices'
]);

peAuctionApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/auction-list.html',
        controller: 'AuctionListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/auction-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/', {
          templateUrl: 'partials/get-started.html',
          controller: 'GetStartedCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);

  }]);
