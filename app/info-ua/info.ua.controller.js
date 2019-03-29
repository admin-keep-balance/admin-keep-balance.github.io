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

        $scope.headForm.$setPristine();
    }

    $scope.saveAbout = function() {
        infoRepository.update({
            aboutTitle: $scope.info.aboutTitle,
            aboutDesc: $scope.info.aboutDesc
        });

        $scope.aboutForm.$setPristine();
    }

    $scope.saveContact = function() {
        infoRepository.update({
            contactTitle: $scope.info.contactTitle,
            contactDesc: $scope.info.contactDesc
        });

        $scope.contactForm.$setPristine();
    }
});