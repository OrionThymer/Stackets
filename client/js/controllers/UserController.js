angular.module('stackets.user', [])
  .controller('UserController', function ($scope, Snippets) {
    $scope.currentUser = Snippets.getUser();
  });
