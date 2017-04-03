angular.module('stackets.profile', [])
  .controller('UserController', function ($scope, Snippets) {
    $scope.currentUser = Snippets.getUser();
    console.log($scope.currentUser);

    $scope.data = {};

    Snippets.getAllSnippets().then(function (snippets) {
      console.log('UserController line 9', snippets);
      $scope.data.snippets = snippets;
    });


  });
