describe ('digits', function () {
	var digitsFilter;
	beforeEach(module('mathSkills'));
	
	beforeEach(inject(function($filter) {
		 	digitsFilter = $filter('digits');
	}));
	
	it ('should separate each digit and wrap in a span', function () {
		expect(digitsFilter('123')).toBe('<span class=digit>1<span><span class=digit>2<span><span class=digit>3<span>');
	});
																  
});