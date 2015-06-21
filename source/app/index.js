var
	_routing = require('./routing.js');


angular.module('app', ['base'])
	.config(_routing)
    .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app')
            .setStorageType('localStorage')
            .setNotify(true, true)
    }])
    .run(['$templateCache', function($templateCache) {
        //$templateCache.put('', );
    }])
    .run(['$ionicPlatform', function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }])
require('../../www/css/index.css')