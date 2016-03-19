import './core/core.module';

import './pages/main/main.module';
import './pages/timeline/timeline.module';
import './pages/galleryPage/galleryPage.module';

angular
    .module('app', [
        'app.core',

        'app.pages.main',
        'app.pages.galleryPage',

    ]);