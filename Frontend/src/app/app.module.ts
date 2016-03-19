import './core/core.module';

import './pages/main/main.module';

import './calendar/calendar.module';

angular
    .module('app', [
        'app.core',

        'app.pages.main',

        'hd.calendar'
    ]);