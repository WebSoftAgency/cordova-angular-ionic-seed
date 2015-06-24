var
    _templates = {
        dash: require('./templates/dash.tpl.html')
    };

angular.module('dash', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('dash.tpl', _templates.dash);
    }])
