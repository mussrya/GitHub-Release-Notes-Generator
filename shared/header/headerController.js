// Controller for the header
app.controller('HeaderController', function ($scope, $location, localStorageService, localStorageSetGet) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.logout = function(){
        localStorageSetGet.set('token', '');
        $location.path('#home');
    };

});
