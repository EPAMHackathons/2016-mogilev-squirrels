import {BenefactorsService} from './benefactors.service';

export class MainController {
    public static $inject: Array<string> = ['BenefactorsService', '$location'];

    public successes: Array<any>;
    public benefactors: Array<any>;

    constructor(private _benefactorsService: BenefactorsService, private _$location: ng.ILocationService) {
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

        this._benefactorsService.getBenefactors().then((benefactors) => {
            this.benefactors = <Array<any>>benefactors.data;
            this.benefactors.forEach((benefactor) => {
                benefactor.url = { 'background-image': 'url(' + benefactor.ImgUrl + '' };
            })
            console.log(this.benefactors);
        });
    }

    click() {
        this._$location.path('/timeline')
    }
}