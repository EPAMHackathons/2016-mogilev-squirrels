import '../../core/core.module';

import {configureStates} from './main.route';

angular
    .module('app.pages.main', [
        'app.core'
    ])
    .config(configureStates);