var
    _routing = require('./routing.js'),
    _templates = {
        app: require('./templates/app.tpl.html')
    };

require('./modules/dash/index.js');

angular.module('app', ['base', 'dash'])
    .config(_routing)
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app')
            .setStorageType('localStorage')
            .setNotify(true, true)
    }])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('app.tpl', _templates.app);
    }])
    .run(['$ionicPlatform', function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    }])

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
