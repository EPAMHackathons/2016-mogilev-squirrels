import {NavbarController} from './navbar.controller';
import {NavbarDirective} from './navbar.directive';

angular
    .module('app.core.navbar', [

    ])
    .directive('hdNavbar', NavbarDirective.create())
    .controller('NavbarController', NavbarController);