export class SuccessDirective implements ng.IDirective {
    public controller: string = 'SuccessController';
    public controllerAs: string = 'ctrl';
    public templateUrl: string = 'success/success.tpl.html';

    public scope: any = {
        success: '<'
    };
    public bindToController: boolean = true;

    constructor() {

    }

    public static create(): ng.IDirectiveFactory {
        let directive = () => new SuccessDirective();
        directive.$inject = [];
        return directive;
    }
}