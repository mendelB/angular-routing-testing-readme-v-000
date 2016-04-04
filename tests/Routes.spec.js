describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Settings', function () {

		it('should have the correct URL', function () {
			var state = $state.get('settings');
			expect(state.url).toEqual('/settings');
		});

		it('should have the correct Template', function(){
			var state = $state.get('settings');
			expect(state.templateUrl).toEqual('views/settings.html')
		});

	});
});