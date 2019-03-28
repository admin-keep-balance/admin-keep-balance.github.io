app.controller("PhotosCtrl", function($scope, $rootScope, $firebaseArray) {
    // Private Properties
    let photosRepository = $rootScope.db.child("photos");

    // Public Properties
    $scope.photos = $firebaseArray(photosRepository);
    $scope.isEdit = false;
    $scope.photo = {};
    
    // Public Methods
});