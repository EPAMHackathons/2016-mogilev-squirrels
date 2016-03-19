import './core/core.module';

import './pages/main/main.module';
import './success/success.module';

import {run} from './app.run';

angular
    .module('app', [
        'app.core',

        'app.pages.main',
        'app.pages.success'
    ]).run(run);