import './core/core.module';

import './pages/main/main.module';
import './pages/timeline/timeline.module';
import './pages/galleryPage/galleryPage.module';
import './pages/giveMoney/giveMoney.module';
import './success/success.module';

import {run} from './app.run';
import './pages/login/login.module';
angular
    .module('app', [
        'app.core',

        'app.pages.main',
        'app.pages.galleryPage',
        'app.pages.timeline',

        'app.pages.success',
        'app.pages.login',
        'app.pages.giveMoney'
    ]).run(run);