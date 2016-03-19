export class NavbarDirective implements ng.IDirective {
    public controller: string = 'NavbarController';
    public controllerAs: string = 'ctrl';
    public templateUrl: string = 'core/navbar/navbar.tpl.html';
    public replace: boolean = true;

    constructor() {

    }

    public static create(): ng.IDirectiveFactory {
        let directive = () => new NavbarDirective();
        directive.$inject = [];
        return directive;
    }
}