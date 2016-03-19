import '../../core/core.module';

import {configureStates} from './login.route';
import {LoginController} from './login.controller';

angular
    .module('app.pages.login', [
        'app.core',
    ])
    .controller('LoginController', LoginController)
    .config(configureStates);