export class MainController {
    public static $inject: Array<string> = [];

    public successes: Array<any>;
    public benefactors: Array<any>;

    constructor() {
        this.successes = [
            {
                text: 'Зарегистрировано'
            },
            {
                text: 'Нашли свой дом'
            },
            {
                text: 'Нужно на содержание'
            },
            {
                text: 'Нуждаеться в ВАС'
            }
        ];

        this.benefactors = [
            {
                fullName: 'qwe qwe qwe'
            }, {
                fullName: 'qwe qwe qwe'
            }, {
                fullName: 'qwe qwe qwe'
            }, {
                fullName: 'qwe qwe qwe'
            }
        ];
    }
}