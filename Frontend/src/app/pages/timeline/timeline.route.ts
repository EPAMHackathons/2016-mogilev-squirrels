configureStates.$inject = ['$stateProvider'];

export function configureStates(
    $stateProvider: ng.ui.IStateProvider) {

    let states = getStates();
    states.forEach(function(state) {
        $stateProvider.state(state.state, state.config);
    });
}

function getStates() {
    return [
        {
            state: 'timeline',
            config: {
                url: '/timeline',
                templateProvider: ($templateCache: ng.ITemplateCacheService) => {
                    return $templateCache.get('pages/timeline/timeline.tpl.html');
                },
                controller: 'TimelineController',
                controllerAs: 'ctrl',
                title: 'timeline',
            }
        }
    ];
}