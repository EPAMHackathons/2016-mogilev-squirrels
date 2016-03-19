import {TimelineComponent} from './timelineComponent.directive';
import {TimelineComponentController} from "./timelineComponent.controller";
import {TimelineComponentService} from "./timelineComponent.service";

angular
    .module('app.timelineComponent', [])
    .directive('hdTimeline', TimelineComponent.create())
    .controller('TimelineComponentController', TimelineComponentController)
    .service('timelineComponentService', TimelineComponentService);