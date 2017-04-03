angular.module('stackets', [
  'ui.router',
  // 'restangular',
  'ngCookies',
  'stackets.services',
  'stackets.searchBar',
  'stackets.searchResults',
  'stackets.home',
  'stackets.about',
  'stackets.view',
  'stackets.popularSnippets',
  'stackets.recentSnippets',
  'stackets.addSnippet',
  'stackets.featuredSnippet',
  'stackets.login',
  'stackets.profile',
  'stackets.editSnippet',
  'auth0',
  'ui.ace'
  // 'auth0.lock',
])
.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, authProvider) {

// RestangularProvider, authProvider
  authProvider.init({
    domain: 'asalem.auth0.com',
    clientID: 'QRAUurHNRwxKOgSu4Igee9CG2VkjCQVX',
    callbackURL: location.href,
    loginState: 'login'
  });

  $httpProvider.interceptors.push('authInterceptor');

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

  $stateProvider
    .state('home', {
      name: 'home',
      url: '/',
      views: {
        'homeView': {
          controller: 'HomeController',
          templateUrl: '../partials/home.html'
        },
        'recentSnippetsView': {
          controller: 'RecentSnippetsController',
          templateUrl: '../partials/recent-snippets.html'
        },
        'featuredSnippetView': {
          controller: 'FeaturedSnippetController',
          templateUrl: '../partials/featured-snippet.html'
        },
        'searchBarView': {
          controller: 'SearchBarController',
          templateUrl: '../partials/search-bar.html'
        }
      }
    })
    .state('login', {
      url: '/login',
      views: {
        'loginView': {
          controller: 'LoginCtrl',
          templateUrl: '../partials/login.html'
        }
      }
    })
    .state('about', {
      url: '/about',
      views: {
        'aboutView': {
          controller: 'AboutController',
          templateUrl: '../partials/about.html'
        }
      }
    })
    .state('search', {
      url: '/search',
      views: {
        'searchResultsView': {
          controller: 'SearchResultsController',
          templateUrl: '../partials/search-results.html'
        }
      }
    })
    .state('search-results', {
      url: '/search/:query',
      views: {
        'searchResultsView': {
          controller: 'SearchResultsController',
          templateUrl: '../partials/search-results.html'
        }
      }
    })
    .state('add', {
      url: '/add',
      views: {
        'addSnippetView': {
          controller: 'AddSnippetController',
          templateUrl: '../partials/add-snippet.html'
        }
      }
    })
    .state('edit', {
      url: '/snippets/:id/edit',
      views: {
        'editSnippetView': {
          controller: 'EditSnippetController',
          templateUrl: '../partials/edit-snippet.html'
        }
      }
    })
    .state('user-profile', {
      url: '/profile',
      views: {
        'userView': {
          controller: 'UserController',
          templateUrl: '../partials/user-profile.html'
        }
      }
    })
    .state('snippet', {
      url: '/snippets/:id',
      views: {
        'viewSnippetView': {
          controller: 'ViewSnippetController',
          templateUrl: '../partials/view-snippet.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
})

.run(function(auth) {
  auth.hookEvents();
});
