var app = angular.module('releaseNotes', ['ui.bootstrap', "ngRoute", 'ngAnimate', 'angulartics', 'angulartics.google.analytics', 'LocalStorageModule']);

app.filter('split', function () {
  return function (input) {
    var inputFinal = input.replace(/api./g, "");
    var inputFinal = inputFinal.replace(/repos\//g, "");
    return inputFinal;
  }
});

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setStorageType('sessionStorage');
  localStorageServiceProvider.setNotify(true, true);
});

app.factory('localStorageSetGet', function (localStorageService) {
  return {
    get: function (key) {
      return localStorageService.get(key);
    },
    set: function (key, val) {
      return localStorageService.set(key, val);
    }
  };
});