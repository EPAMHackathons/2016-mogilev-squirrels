import '../../core/core.module';

import {configureStates} from './main.route';
import {MainController} from './main.controller';

angular
    .module('app.pages.main', [
        'app.core',
    ])
    .controller('MainController', MainController)
    .config(configureStates);