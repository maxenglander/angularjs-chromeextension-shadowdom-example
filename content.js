var container, module, run, shadowRoot, viewURL;

container = document.createElement('span');
module = angular.module('myApp', [])
shadowRoot = document.documentElement.createShadowRoot();
shadowRoot.appendChild(container);
viewURL = chrome.runtime.getURL('view.html');

module.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.state = 'off';
    $scope.$on('switch', function () {
        console.log('switching');
        $scope.state = $scope.state === 'off' ? 'on' : 'off';
    });
}]);
module.run(['$rootElement', '$rootScope', function ($rootElement, $rootScope) {
    $rootElement.html('<ng-include src="\'' + viewURL + '\'" />');
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log('got message', message);
        if (message === 'switch') {
            $rootScope.$broadcast('switch');
            $rootScope.$apply();
        }
    });
}]);

angular.bootstrap(container, [module.name]);
