import '../../core/core.module';

import {configureStates} from './timeline.route';
import {TimelineController} from './timeline.controller';

import './../../timelineComponent/timelineComponent.module';

angular
    .module('app.pages.timeline', [
        'app.core',

        'app.timelineComponent'
    ])
    .controller('TimelineController', TimelineController)
    .config(configureStates);