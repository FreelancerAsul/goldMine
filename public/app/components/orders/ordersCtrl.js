angular
  .module('app')
  .controller('ordersCtrl', ['$scope', '$http' ,function($scope, $http) {
    $http.get('/api/get/orders')
          .success(function(data) {
              $scope.orders = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  }]);
