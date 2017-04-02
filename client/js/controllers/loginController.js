angular.module('stackets.login', [])

.controller('LoginCtrl', function(Snippets, $scope, auth, $state, $rootScope, $cookieStore) {

  auth.signin({
    popup: true,
    standalone: true,
    chrome: true,
    icon: "http://oi63.tinypic.com/2ltk1at.jpg",
    showIcon: true
  }, function(profile) {
    Snippets.addUser(profile);
    $cookieStore.put('activeUser', profile);

    $('.nav-visibility').css('display', 'block');
    $('.login-visibility').css('display', 'none');
    if (Snippets.getUser()) $scope.loggedIn = true;
    $state.go('home');
  }, function(error) {
    console.log("Error logging in", error);
  });

});