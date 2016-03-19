configureStates.$inject = ['$stateProvider'];

export function configureStates($stateProvider:ng.ui.IStateProvider) {

    let states = getStates();
    states.forEach(function (state) {
        $stateProvider.state(state.state, state.config);
    });
}

function getStates() {
    return [
        {
            state: 'giveMoney',
            config: {
                url: '/give_money',
                templateProvider: ($templateCache:ng.ITemplateCacheService) => {
                    return $templateCache.get('pages/giveMoney/giveMoney.tpl.html');
                },
                controller: 'GiveMoneyController',
                controllerAs: 'ctrl',
                title: 'Give Money',
            }
        }
    ];
}