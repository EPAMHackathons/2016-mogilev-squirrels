export class LoginController {
    public static $inject: Array<string> = ['$http'];

    public Email: string;
    public Password: string;

    constructor(private http: ng.IHttpService) {

    }

    private Login(): void {
        this.http.post("http://hackaton-happydog-api.azurewebsites.net/api/account/register/vk", { Email: this.Email, Password: this.Password })
            .success(() => {
                console.log("success");
            })
            .error((error) => {
                console.log(error);
            });
    }

}