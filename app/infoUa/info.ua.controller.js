app.controller("InfoUaCtrl", function($scope, $rootScope, $firebaseObject) {
    // Private Properties
    let infoRepository = $rootScope.db.child("info/ua");

    // Public Properties
    $scope.info = $firebaseObject(infoRepository);
    
    // Public Methods
    $scope.saveHead = function() {
        infoRepository.update({
            headTitle: $scope.info.headTitle,
            headDesc: $scope.info.headDesc
        });
    }

    $scope.saveAbout = function() {
        infoRepository.update({
            aboutTitle: $scope.info.aboutTitle,
            aboutDesc: $scope.info.aboutDesc
        });
    }

    $scope.saveContact = function() {
        infoRepository.update({
            contactTitle: $scope.info.contactTitle,
            contactDesc: $scope.info.contactDesc
        });
    }
});