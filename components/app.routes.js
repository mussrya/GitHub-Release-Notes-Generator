app.config(function ($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'components/home/home.html',
    controller: 'homeController'
  }).when('/auth', {
    templateUrl: 'components/auth/auth.html',
    controller: 'authController'
  }).when('/about', {
    templateUrl: 'components/about/about.html'
  }).
  otherwise({
    redirectTo: '/home'
  });
});