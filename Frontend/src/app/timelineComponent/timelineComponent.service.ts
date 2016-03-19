export class TimelineComponentService {
    public static $inject = ['$http'];

    constructor(private $http : ng.IHttpService) {
    }

    public getData() {
        return this.$http.get('http://hackaton-happydog-api.azurewebsites.net/api/UserSchedules');
    }
}