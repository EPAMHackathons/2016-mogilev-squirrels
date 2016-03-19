import '../../core/core.module';

import {configureStates} from './galleryPage.route';
import {GalleryPageController} from './galleryPage.controller';

import './../../gallery/gallery.module';

angular
    .module('app.pages.galleryPage', [
        'app.core',

        'app.gallery'
    ])
    .controller('GalleryPageController', GalleryPageController)
    .config(configureStates);