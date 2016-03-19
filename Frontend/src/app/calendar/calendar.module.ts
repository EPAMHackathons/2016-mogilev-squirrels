import {CalendarController} from './calendar.controller';
import {Calendar} from "./calendar.directive";

angular
    .module('hd.calendar', [])
    .directive('hdCalendar', Calendar.create)
    .controller('CalendarController', CalendarController);
