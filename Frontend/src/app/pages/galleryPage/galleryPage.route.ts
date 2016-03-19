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
            state: 'gallery',
            config: {
                url: '/gallery',
                templateProvider: ($templateCache: ng.ITemplateCacheService) => {
                    return $templateCache.get('pages/galleryPage/galleryPage.tpl.html');
                },
                controller: 'GalleryPageController',
                controllerAs: 'ctrl',
                title: 'galleryPage',
            }
        }
    ];
}