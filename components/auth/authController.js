
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
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('error');
  });
    
  $scope.saveTokenUser = function (tokenPassed, save) {
    $scope.token = tokenPassed.replace(/(\r\n|\n|\r)/gm,"");
    if($scope.token){
      localStorageSetGet.set('token', $scope.token);
    }else{
      localStorageSetGet.set('token', '');
    }
    $location.path('#home');
  }

});
