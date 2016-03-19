export class DateFormat implements ng.IDirective {
    public link:ng.IDirectiveLinkFn;

    public constructor() {
        this.link = (scope, element) => this.linkFn(scope, element);
    }

    private linkFn(scope, element:JQuery) {
        let date = new Date(scope.item.Date);
        //element.append(date.toLocaleDateString());

        let monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июнль', 'Август', 'Сегнтябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

        element.find('p').append(date.getDate().toString());
        element.find('p').append(`<span>${monthes[date.getMonth()]}</span>`);
    }

    public static create() {
        let directive = () => new DateFormat();
        directive.$inject = [];
        return directive;
    }
}