
// authController.js
// Controller for the auth page

app.controller('authController', function ($scope, $http, $window, $location, localStorageService, localStorageSetGet) {
console.log($window.location.hash);

$scope.code = $window.location.hash.split('code=');
$scope.code = $scope.code[1];

});
