import {TimelineComponent} from './timelineComponent.directive';
import {TimelineComponentController} from "./timelineComponent.controller";
import {TimelineComponentService} from "./timelineComponent.service";

import {DateFormat} from './dateFormat/dateFormat.directive';

angular
    .module('app.timelineComponent', [])
    .directive('hdTimeline', TimelineComponent.create())
    .controller('TimelineComponentController', TimelineComponentController)
    .service('timelineComponentService', TimelineComponentService)
    .directive('dateFormat', DateFormat.create());