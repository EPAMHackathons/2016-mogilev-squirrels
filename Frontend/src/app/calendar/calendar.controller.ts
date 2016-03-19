import {CalendarService} from './calendar.service';
import {DaySchedule} from './calendar.service';

export class CalendarController {
    public static $inject = ['calendarService'];

    public daysDate:DaySchedule[];
    public daysNodes:any[];

    public constructor(private calendarService:CalendarService) {
        this.daysDate = [];
        this.daysNodes = [];
    }

    public init():void {
        this.daysDate = this.calendarService.getDaySchedule();
        this.daysNodes = this.calendarService.mapDayToNodes();
    }
}