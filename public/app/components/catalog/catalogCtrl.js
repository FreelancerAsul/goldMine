angular
  .module('app')
  .controller('catalogCtrl', ['$scope', '$rootScope', '$http', '$location' ,function($scope, $rootScope, $http, $location) {
    $scope.msg = "Message recieved";
    $scope.visitItem = function(id) {
      console.log(id);
      $location.path("/item/" + id);
    }
    $http.get('/api/get/items')
          .success(function(data) {
              $scope.items = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  }]);
