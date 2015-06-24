module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/app/dash");

    $stateProvider
        .state('app', {
            url: "/app",
            abstruct: true,
            templateUrl: 'app.tpl'
        })
        .state('app.dash', {
            url: "/dash",
            templateUrl: 'dash.tpl'
        })

}]
