describe('Influential Figures', function(){
    
    beforeEach(module('InfluentialFigures'));
    
    var influentialFiguresService, httpBackend;
    
    beforeEach(inject(function(_influentialFiguresService_, _$httpBackend_){
        influentialFiguresService = _influentialFiguresService_;
        httpBackend = _$httpBackend_;
    }));
    
    describe('List of Figures', function(){
        it('Get all figures', function(){
            var figures;
            var expectedData = [{id: "f1",name: "Nina Simone", description: "Singer, black activist",socialMovement: "quilombolas"}];
            
            httpBackend.whenGET('http://0.0.0.0:8000/influential_figures').respond(expectedData);
            figures = influentialFiguresService.getAll();
            
            httpBackend.flush();
            
            expect(expectedData[0].id).toEqual(figures[0].id);
            expect(expectedData[0].name).toEqual(figures[0].name);
            expect(expectedData[0].description).toEqual(figures[0].description);
            expect(expectedData[0].socialMovement).toEqual(figures[0].socialMovement);
        });
    });
    
});