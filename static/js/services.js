/* Services */

var peAuctionServices = angular.module('peAuctionServices', ['ngResource']);

peAuctionServices.factory('Product', ['$resource',
  function($resource){
    return $resource('/api/product/:productId', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);
