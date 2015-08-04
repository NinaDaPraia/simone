describe('SimoneApp', function(){
    
    beforeEach(module('SimoneApp'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    describe('List of Influential Figures', function(){
        it('Get all Influential Figures in figures variable', function(){
            var $scope = {};
            $controller('SimoneController', {$scope: $scope});
            
            expect([{id: '1',
                    name: 'Bob Marley',
                    description: 'Since his passing on May 11, 1981, Bob Marley’s legend looms larger than ever, as evidenced by an ever-lengthening list of accomplishments attributable to his music, which identified oppressors and agitated for social change while simultaneously allowing listeners to forget their troubles and dance.',
                    socialMovement: 'Black Power'}])
            .toEqual($scope.figures);
        });
    });
    
});