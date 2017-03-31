angular.module('stackets.login', [

])

.controller('LoginCtrl', function( $scope, auth, $state, $rootScope) {

  auth.signin({
    popup: true,
    standalone: true,
    chrome: true
  }, function(profile) {
    // store.set('profile', profile);
    console.dir(profile);
    $rootScope.$on('profile', profile);
    console.log($rootScope);
    // store.set('profile', profile);
    $state.go('home');
  }, function(error) {
    console.log("Error logging in", error);
  });

});