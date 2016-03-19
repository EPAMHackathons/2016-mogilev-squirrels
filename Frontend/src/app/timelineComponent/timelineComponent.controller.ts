export class TimelineComponentController {
    public static $inject = ['timelineComponentService', '$http'];

    public items = [];

    public constructor(private timelineComponentService, private $http) {
    }

    private init(scope) {
        this.timelineComponentService.getData().then((data) => {
            this.items = data.data;
        });
    }
}