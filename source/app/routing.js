module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/app");

    $stateProvider
        .state('app', {
            url: "/app",

        })

}]
