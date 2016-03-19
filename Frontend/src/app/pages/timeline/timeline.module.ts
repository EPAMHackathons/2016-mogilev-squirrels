import '../../core/core.module';

import {configureStates} from './timeline.route';
import {TimelineController} from './timeline.controller';

import './../../calendar/calendar.module';

angular
    .module('app.pages.timeline', [
        'app.core',

        'hd.calendar'
    ])
    .controller('TimelineController', TimelineController)
    .config(configureStates);