app.controller("InfoUaCtrl", function($scope, $rootScope, $firebaseObject) {
    // Private Properties
    let infoRepository = $rootScope.db.child("info/ua");

    // Public Properties
    $scope.info = $firebaseObject(infoRepository);
    
    // Public Methods
    $scope.saveMenuInfo = function() {
        infoRepository.update({
            menuAbout: $scope.info.menuAbout,
            menuProducts: $scope.info.menuProducts,
            menuContact: $scope.info.menuContact
        });

        $scope.menuForm.$setPristine();
    }

    $scope.saveHeadInfo = function() {
        infoRepository.update({
            headTitle: $scope.info.headTitle,
            headDesc: $scope.info.headDesc
        });

        $scope.headForm.$setPristine();
    }

    $scope.saveAboutInfo = function() {
        infoRepository.update({
            aboutTitle: $scope.info.aboutTitle,
            aboutDesc: $scope.info.aboutDesc
        });

        $scope.aboutForm.$setPristine();
    }

    $scope.saveContactInfo = function() {
        infoRepository.update({
            contactTitle: $scope.info.contactTitle,
            contactDesc: $scope.info.contactDesc,
            contactPhone: $scope.info.contactPhone,
            contactInstagram: $scope.info.contactInstagram,
            copyright: $scope.info.copyright
        });

        $scope.contactForm.$setPristine();
    }

    $scope.savePriceInfo = function() {
        infoRepository.update({
            priceTitle: $scope.info.priceTitle,
            priceOld: $scope.info.priceOld,
            priceNew: $scope.info.priceNew,
            priceOrderButton: $scope.info.priceOrderButton
        });

        $scope.priceForm.$setPristine();
    }

    $scope.saveModalInfo = function() {
        infoRepository.update({
            modalTitle: $scope.info.modalTitle,
            modalFieldName: $scope.info.modalFieldName,
            modalFieldPhone: $scope.info.modalFieldPhone,
            modalFieldPromo: $scope.info.modalFieldPromo,
            modalSendButton: $scope.info.modalSendButton,
            modalCloseButton: $scope.info.modalCloseButton
        });

        $scope.modalForm.$setPristine();
    }
});