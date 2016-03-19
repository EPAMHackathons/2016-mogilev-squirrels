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
			state: 'login',
			config: {
				url: '/',
				templateProvider: ($templateCache: ng.ITemplateCacheService) => {
					return $templateCache.get('pages/login/login.tpl.html');
				},
				controller: 'LoginController',
				controllerAs: 'ctrl',
				title: 'login',
			}
		}
	];
}