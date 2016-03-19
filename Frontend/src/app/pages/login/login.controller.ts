export class LoginController {
    public static $inject: Array<string> = ['$http'];

    public Email: string;
    public Password: string;

    constructor(private http: ng.IHttpService) {

    }

    private Login(): void {
        this.http.post("http://localhost:63930/api/account/register/vk", { Email: this.Email, Password: this.Password })
            .success(() => {
                console.log("success");
            })
            .error((error) => {
                console.log("occured error", error);
            });
    }

}