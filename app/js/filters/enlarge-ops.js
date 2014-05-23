 /*global angular */

angular.module('mathSkills').filter('enlargeOps', function () {
    return function (input) {
		// regex \.(?=\d) is a decimal/period with look-ahead for next-character digit
        return typeof input === 'string' ?
            input.replace(/[\*\/\+\-\=]/g, function (char) {
                switch (char) {
                    case '*': return '<span>&bull;</span>';
					case 'x': return '<span>&bull;</span>';
                    case '/': return '<span class=bigger>&divide;</span>';
					case '+': return '<span class=bigger>&#43;</span>';
					case '-': return '<span class=bigger>&#45;</span>';
					case '=': return '<span class=bigger>=</span>';
                }
            }).replace(/\.(?=\d)/g,'<span class=decimalNoPadding>.</span>') :
            input;
    };
});
    