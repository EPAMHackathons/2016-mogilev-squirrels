export class GiveMoneyController {
    public static $inject:Array<string> = ['$http'];

    constructor(private http:ng.IHttpService) {
    }
}