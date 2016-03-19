import '../../core/core.module';

import {configureStates} from './giveMoney.route';
import {GiveMoneyController} from './giveMoney.controller';

angular
    .module('app.pages.giveMoney', [
        'app.core',
    ])
    .controller('GiveMoneyController', GiveMoneyController)
    .config(configureStates);
