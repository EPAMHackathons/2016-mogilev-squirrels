import {GalleryController} from './gallery.controller';
import {Gallery} from './gallery.directive';
import {GalleryService} from './gallery.service';

angular
    .module('app.gallery', [])
    .directive('hdGallery', Gallery.create())
    .controller('GalleryController', GalleryController)
    .service('galleryService', GalleryService);