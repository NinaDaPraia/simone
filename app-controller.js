angular.module('SimoneApp')

.controller('SimoneController', function($scope, influentialFiguresService){
            $scope.figures = influentialFiguresService.getAll();
});