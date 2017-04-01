angular.module('stackets.profile', [])
  .controller('UserController', function ($scope, Snippets) {
    $scope.currentUser = Snippets.getUser();
    console.log($scope.currentUser);
  });
