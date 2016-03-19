import {CalendarController} from './calendar.controller';
import {Calendar} from "./calendar.directive";
import {CalendarService} from './calendar.service';

angular
    .module('hd.calendar', [])
    .directive('hdCalendar', Calendar.create())
    .controller('CalendarController', CalendarController)
    .service('calendarService', CalendarService);
