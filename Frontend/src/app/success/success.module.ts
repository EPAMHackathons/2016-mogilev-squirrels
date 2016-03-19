import {SuccessController} from './success.controller';
import {Success} from './success.component';

angular
    .module('app.success', [

    ])
    .component('hdSuccess', new Success())
    .controller('SuccessController', SuccessController);