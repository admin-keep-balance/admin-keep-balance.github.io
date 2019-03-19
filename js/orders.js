app.controller("OrdersCtrl", function($scope, $rootScope, $firebaseArray) {
    // Private Properties
    let ordersRepository = $rootScope.db.child("orders");

    // Public Properties
    $scope.orders = $firebaseArray(ordersRepository);
    
    // Public Methods
    $scope.removeOrder = function(order) {
        ordersRepository.child(order.$id).remove();
    }
    
    $scope.acceptOrder = function(order) {
        ordersRepository.child(order.$id).update({ accepted: true });
    }
});