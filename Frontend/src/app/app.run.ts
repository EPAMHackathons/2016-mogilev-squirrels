run.$inject = ['$http'];

export function run($http: ng.IHttpService) {
    $http.defaults.withCredentials = true;
}