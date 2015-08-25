
// authController.js
// Controller for the auth page

app.controller('authController', function ($scope, $http, $window, $location, localStorageService, localStorageSetGet) {

  $scope.code = $window.location.hash.split('code=');
  $scope.code = $scope.code[1];
    
  $http.get('/token.php?code='+$scope.code).
  then(function(response) {
    if(response.data){
      $scope.saveTokenUser(response.data, true);
    }    
  }, function(response) {
    console.log('error');
  });
    
  $scope.saveTokenUser = function (tokenPassed, save) {
    $scope.token = tokenPassed.replace(/(\r\n|\n|\r)/gm,"");
    localStorageSetGet.set('token', $scope.token);
    $location.path('home');
  }

});