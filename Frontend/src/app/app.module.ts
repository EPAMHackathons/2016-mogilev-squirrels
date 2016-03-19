import './core/core.module';

import './pages/main/main.module';

angular
    .module('app', [
        'app.core',

        'app.pages.main',

    ]);