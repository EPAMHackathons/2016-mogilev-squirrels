export class MainController {
    public static $inject: Array<string> = [];

    public successes: Array<any>;

    constructor() {
        this.successes = [
            {
                text: 'Успех 1'
            },
            {
                text: 'Успех 2'
            },
            {
                text: 'Успех 3'
            },
            {
                text: 'Успех 4'
            }
        ];
    }
}