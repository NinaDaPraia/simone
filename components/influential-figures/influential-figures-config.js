angular.module('InfluentialFigures')
.config(function(RestangularProvider, ENV){
    RestangularProvider.setBaseUrl(ENV.apiEndpoint);
    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    RestangularProvider.setDefaultHttpFields({
        'withCredentials': true
    });
});