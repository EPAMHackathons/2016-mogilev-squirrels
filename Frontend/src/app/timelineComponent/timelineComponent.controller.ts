export class TimelineComponentController {
    public static $inject = ['timelineComponentService'];

    public items = [];

    public constructor(private timelineComponentService) {
    }

    private init(scope) {
        this.timelineComponentService.getData().then((data)=> {
            this.items = data;
        });
    }
}