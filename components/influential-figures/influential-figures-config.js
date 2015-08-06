angular.module('InfluentialFigures')
.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://0.0.0.0:8000');
    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    RestangularProvider.setDefaultHttpFields({
        'withCredentials': true
    });
});