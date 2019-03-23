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
});