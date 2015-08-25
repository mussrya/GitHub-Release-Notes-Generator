
// authController.js
// Controller for the auth page

app.controller('authController', function ($scope, $http, $window, $location, localStorageService, localStorageSetGet) {

  $scope.code = $window.location.hash.split('code=');
  $scope.code = $scope.code[1];
    
  $http.get('/token.php?code='+$scope.code).
  then(function(response) {
    console.log(response);
    console.log(response.data);
      
      
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('error');
  });
    
  $scope.saveTokenUser = function (tokenPassed, save) {
    $scope.token = tokenPassed;
    if(save != false){$scope.token = btoa(' :'+$scope.token);}
    localStorageSetGet.set('token', $scope.token);
    $scope.repoData = '';
    $scope.milestonesData = '';
    $scope.results = '';    
  }

});
