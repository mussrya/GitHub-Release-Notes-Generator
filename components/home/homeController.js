// homeController.js
// Controller for the home page

app.controller('homeController', function ($scope, $http, $window, $location, localStorageService, localStorageSetGet) {

    $scope.saveToken = function (tokenPassed) {
        $scope.tokenSet = true;
        localStorageSetGet.set('token', tokenPassed);
        $scope.token = tokenPassed;
        $scope.getGitData('https://api.github.com/user/repos', 'getRepos');
    }

    $scope.saveRepo = function (repoPassed) {
        $scope.repoSet = true;
        $scope.repoName = repoPassed;
        $scope.getGitData('https://api.github.com/repos/' + $scope.repoName + '/milestones', 'getMilestones');
    }

    $scope.saveMilestone = function (milestonePassed, milestoneId) {
        $scope.milestoneSet = true;
        $scope.milestoneName = milestonePassed;
        $scope.milestoneId = milestoneId;
        $scope.getGitData('https://api.github.com/repos/' + $scope.repoName + '/issues?state=all&filter=all&milestone=' + $scope.milestoneId, 'getIssues');
    }

    $scope.getGitData = function (url, type) {
        //$scope.token = 'bXVzc3J5YTpmOWMyMWZhYTk0YTc3YzQ3MTU4Y2UxNTg4OTllMzRhMDBlNTU5Zjc1';
        $scope.loading = true;

        // The GET request for getting data from the repo
        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Basic ' + $scope.token
            }
        }
        $http(req).
        success(function (data, status, headers, config) {

            switch (type) {
                case 'getRepos':
                    $scope.repoData = data;
                    break;
                case 'getMilestones':
                    $scope.milestonesData = data;
                    break;
                case 'getIssues':
                    $scope.results = data;
                    break;
            }

        }).
        error(function (data, status, headers, config) {
            $scope.errorMessage = '!!ALERT!! - There was an error - Data: ' + data + ' - Status: ' + status + ' - headers: ' + headers + ' - Config: ' + config;
        });
    }

    // Setting up / clearing of the params
    $scope.setDefaults = function (logout) {
        if(logout){
            $scope.token = '';
            localStorageSetGet.set('token', '');
        }else{
            $scope.token = localStorageSetGet.get('token');
        }
        
        if ($scope.token) {
            setTimeout(function () {
                $scope.saveToken($scope.token);
            }, 0);
        }
        $scope.tokenSet = false;
        $scope.repoName = '';
        $scope.repoSet = false;
        $scope.milestoneName = '';
        $scope.milestoneSet = 'false';
        $scope.milestoneId = '';
        $scope.issues = '';
        $scope.loading = false;
        $scope.results = '';
    }

    // Initial run
    $scope.setDefaults();



});
