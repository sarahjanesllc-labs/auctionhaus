/* Controllers */

var peAuctionControllers = angular.module('peAuctionControllers', []);


peAuctionControllers.controller('GetStartedCtrl', ['$scope',
    function($scope) {
        console.log('getting started');
    }
]);

peAuctionControllers.controller('AuctionListCtrl', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
]);

peAuctionControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
]);
