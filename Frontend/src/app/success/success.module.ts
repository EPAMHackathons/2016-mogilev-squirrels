import {SuccessController} from './success.controller';
import {SuccessDirective} from './success.directive';

angular
    .module('app.pages.success', [

    ])
    .directive('hdSuccess', SuccessDirective.create())
    .controller('SuccessController', SuccessController);