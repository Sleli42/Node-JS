angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Lucas',country:'Sweden'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});