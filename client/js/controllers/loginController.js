angular.module('stackets.login', [

])

.controller('LoginCtrl', function(  $scope, auth, $state) {

  auth.signin({
    popup: true,
    standalone: true,
    chrome: true
  }, function() {
    $state.go('home');
  }, function(error) {
    console.log("Error logging in", error);
  });

});