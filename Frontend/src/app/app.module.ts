import './core/core.module';

import './pages/main/main.module';
import './pages/timeline/timeline.module';

import './pages/login/login.module';

angular
    .module('app', [
        'app.core',

        'app.pages.main',
        'app.pages.timeline',
        'app.pages.login'

    ]);