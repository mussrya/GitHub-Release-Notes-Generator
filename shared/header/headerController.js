// Controller for the header
app.controller('HeaderController', function ($scope, $location, localStorageService, localStorageSetGet) {

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };

  $scope.logout = function(){
    localStorageSetGet.set('token', '');
    localStorageSetGet.set('username', '');
    $location.path('#home');
  };
    
  $scope.$on("LocalStorageModule.notification.setitem", function() {
    $scope.token = localStorageSetGet.get('token');
  });
});
