import {NavbarController} from './navbar.controller';
import {Navbar} from './navbar.component';

angular
    .module('app.core.navbar', [

    ])
    .component('hdNavbar', new Navbar())
    .controller('NavbarController', NavbarController);