angular.module('stackets.login', [])

.controller('LoginCtrl', function(Snippets, $scope, auth, $state, $rootScope, $cookieStore) {

  auth.signin({
    popup: true,
    standalone: true,
    chrome: true
  }, function(profile) {
    Snippets.addUser(profile.email);
    $cookieStore.put('activeUser', profile);
    console.dir(profile);
    // store.set('profile', profile);
    $state.go('home');
  }, function(error) {
    console.log("Error logging in", error);
  });

});