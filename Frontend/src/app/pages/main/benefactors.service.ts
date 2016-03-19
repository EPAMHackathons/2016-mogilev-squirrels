export class BenefactorsService {
    public static $inject: Array<string> = ['$http'];

    constructor(private _$http: ng.IHttpService) {

    }

    public getBenefactors() {
        return this._$http.get('http://hackaton-happydog-api.azurewebsites.net/api/account/topUsers');
    }
}