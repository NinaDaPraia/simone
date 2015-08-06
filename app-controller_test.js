describe('SimoneApp', function(){
    
    beforeEach(module('SimoneApp'));
    
    var $controller, httpBackend;
    var expectedData = [{id: '1',
                    name: 'Bob Marley',
                    description: 'Since his passing on May 11, 1981, Bob Marley’s legend looms larger than ever, as evidenced by an ever-lengthening list of accomplishments attributable to his music, which identified oppressors and agitated for social change while simultaneously allowing listeners to forget their troubles and dance.',
                    socialMovement: 'Black Power'}];
    
    beforeEach(inject(function(_$controller_, _$httpBackend_){
        $controller = _$controller_;
        httpBackend = _$httpBackend_;
        httpBackend.whenGET('http://0.0.0.0:8000/influential_figures').respond(expectedData);
    }));
    
    describe('List of Influential Figures', function(){
        it('Get all Influential Figures in figures variable', function(){
            var $scope = {};
            
            $controller('SimoneController', {$scope: $scope});
            httpBackend.flush();
            
            expect(1).toEqual($scope.figures.length);
        });
        
        it('Should call influentialFiguresService', function(){
            var $scope = {};
            
            $controller('SimoneController', {$scope: $scope});
            
            httpBackend.flush();      
        });
    });
    
});