export class TimelineComponent implements ng.IDirective {
    public restrict:string = 'AE';
    public templateUrl:string = 'timelineComponent/timelineComponent.tpl.html';
    public link:ng.IDirectiveLinkFn;
    public replace = true;

    public controller = 'TimelineComponentController';
    public controllerAs = 'ctrl';
    public bindToController = true;

    public constructor() {
        this.link = (scope, element, attr, ctrl) => this.linkFn(scope, element, attr, ctrl);
    }

    private linkFn(scope, element, attr, ctrl) {
        ctrl.init();
    }

    public static create() {
        let timeline = () => new TimelineComponent();
        timeline.$inject = [];
        return timeline;
    }
}