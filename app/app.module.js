var config = {
    apiKey: "AIzaSyDOhjkWBYF_B1CHUJdrZd44jW0_X_-NoRo",
    authDomain: "keepbalance.firebaseapp.com",
    databaseURL: "https://keepbalance.firebaseio.com",
    projectId: "keepbalance",
    storageBucket: "keepbalance.appspot.com",
    messagingSenderId: "660135337584"
};

firebase.initializeApp(config);

var app = angular.module("keepBalanceApp", ["firebase", "ngAnimate", "ngRoute"]);

app.run(function($rootScope) {
    $rootScope.db = firebase.database().ref();
    $rootScope.showMobileMenu = false;
    $rootScope.changeMobileMenu = function() {
        $rootScope.showMobileMenu = !$rootScope.showMobileMenu;
    }
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './app/orders/orders.htm',
            controller: 'OrdersCtrl'
        });
});