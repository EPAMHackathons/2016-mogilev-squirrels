import {GalleryController} from './gallery.controller';
import {Gallery} from './gallery.directive';

angular
    .module('app.gallery', [])
    .directive('hdGallery', Gallery.create())
    .controller('GalleryController', GalleryController);