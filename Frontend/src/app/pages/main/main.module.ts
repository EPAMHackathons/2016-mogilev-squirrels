import '../../core/core.module';

import {configureStates} from './main.route';
import {MainController} from './main.controller';
import {BenefactorsService} from './benefactors.service'; 

angular
    .module('app.pages.main', [
        'app.core',
    ])
    .controller('MainController', MainController)
    .config(configureStates)
    .service('BenefactorsService', BenefactorsService);