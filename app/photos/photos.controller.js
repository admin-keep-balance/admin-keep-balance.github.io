app.controller("PhotosCtrl", function($scope, $rootScope, $firebaseArray) {
    // Private Properties
    let photosRepository = $rootScope.db.child("photos");

    // Public Properties
    $scope.photos = $firebaseArray(photosRepository);
    $scope.isEdit = false;
    $scope.currentPhoto = {};
    
    // Public Methods
    $scope.savePhoto = function() {
        if(!$scope.isEdit) {
            photosRepository.push($scope.currentPhoto);
        } else {
            photosRepository.child($scope.currentPhoto.$id).update({
                title: $scope.currentPhoto.title,
                urlSmall: $scope.currentPhoto.urlSmall,
                urlLarge: $scope.currentPhoto.urlLarge
            });
        }

        $scope.clear();
    }

    $scope.editPhoto = function(photo) {
        $scope.currentPhoto = Object.assign({}, photo);
        $scope.isEdit = true;
        $scope.photosForm.$pristine = true;
    }

    $scope.clear = function() {
        $scope.currentPhoto = {};
        $scope.isEdit = false;

        $scope.photosForm.$pristine = true;
    }

    $scope.deletePhoto = function() {
        photosRepository.child($scope.currentPhoto.$id).remove();

        $scope.clear();
    }
});