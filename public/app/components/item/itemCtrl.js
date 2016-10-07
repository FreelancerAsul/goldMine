angular
  .module('app')
  .controller('itemCtrl', function($scope, $sce, $http, $compile, $rootScope, $stateParams) {
    console.log($stateParams.id);
    $http.get('/api/get/item/' + $stateParams.id)
          .success(function(data) {
              $scope.item = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
    $scope.potato = function(i) {console.log(i); return $scope.item.modifiers[i].mode;}
    $scope.evalOption = function(m){
                          // return $scope.item.modifiers[m];
                          console.log($scope.item.modifiers[m].mode);
                          var value;
                          switch ($scope.item.modifiers[m].mode) {
                            case "add":
                                value='<div ng-repeat="o in m.option" flex="100">' + '<md-checkbox>' + '{{o.name}}' + '</md-checkbox>' + '</div>';
                              break;
                            case "rebase":
                                value='<md-radio-group><md-radio-button value="potato" ng-repeat="o in m.option">{{o.name}}</md-radio-button></md-radio-group>';
                              break;
                            case "multiplier":
                                value="multplieri";
                              break;
                            case "cosmetic":
                                value="cosmetic";
                              break;
                            case "amount":
                                value="amount";
                              break;
                            default:
                          }
                          //return $compile(value)($scope);
                          return $sce.trustAsHtml(value);
                        };
  });
