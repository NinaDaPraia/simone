angular.module("InfluentialFigures")
.service("influentialFiguresService", function(Restangular){
    var service = {
        getAll: function(){
            return Restangular.all('influential_figures').getList().$object;
        }
    }
    return service;
});