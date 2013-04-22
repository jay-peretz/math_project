describe ('digits', function () {
	var digitsFilter;
	beforeEach(module('mathSkills'));
	
	beforeEach(inject(function($filter) {
		 	digitsFilter = $filter('digits');
	}));
	
	it ('should separate each digit and wrap in a span', function () {
		expect(digitsFilter('123')).toBe('<span class=digit>1</span><span class=digit>2</span><span class=digit>3</span>');
	});
    
    it ('should enter the number of place-holder spans provided as offset', function () {
        expect(digitsFilter('123', 2)).toBe('<span class="digit placeholder"></span><span class="digit placeholder"></span><span class=digit>1</span><span class=digit>2</span><span class=digit>3</span>')
    })
    
    it ('should enter container spans if container === true', function () {
        expect(digitsFilter('123', 0, true)).toBe('<span class=answerContainer><span class=digit>1</span><span class=digit>2</span><span class=digit>3</span></span>')
    })
    
    it ('should enter closing container span after character "↓" in input string if container === true', function () {
        expect(digitsFilter('123↓', 0, true)).toBe('<span class=answerContainer><span class=digit>1</span><span class=digit>2</span><span class=digit>3</span></span><span class="digit arrow">↓</span>')
    })
    
    it ('should add span enclosing character "-"', function () {
        expect(digitsFilter('-123')).toBe('<span class="digit minus">-</span><span class=digit>1</span><span class=digit>2</span><span class=digit>3</span>')
    })
																  
});