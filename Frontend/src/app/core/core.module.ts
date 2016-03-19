import './navbar/navbar.module';
import './templates/templates.module';

import {configureStates} from './core.route';

angular
    .module('app.core', [
        'ui.router',

        'app.core.templates',
        'app.core.navbar'
    ])
    .config(configureStates);