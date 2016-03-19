configureStates.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export function configureStates(
	$stateProvider: ng.ui.IStateProvider,
	$locationProvider: ng.ILocationProvider,
	$urlRouterProvider: ng.ui.IUrlRouterProvider) {

	let otherwise = '/404';
	let states = getStates();
	states.forEach(function(state) {
		$stateProvider.state(state.state, state.config);
	});
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise(otherwise);
}

function getStates() {
	return [
		{
			state: '404',
			config: {
				url: '/404',
				templateUrl: 'core/404.tpl.html',
				title: '404',
			},
		}
	];
}