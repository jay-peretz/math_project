 /*global angular */

angular.module('mathSkills').filter('enlargeOps', function () {
    return function (input) {
        return typeof input === 'string' ?
            input .replace(/[\*\+\-\=]/g, function (char) {
                switch (char) {
                    case '*': return '<span>&bull;</span>';
					case 'x': return '<span>&bull;</span>';
					case '+': return '<span class=bigger>&#43;</span>';
					case '-': return '<span class=bigger>&#45;</span>';
					case '=': return '<span class=bigger>=</span>';
                }
            })
			// replace forward slash if not followed by a letter, i.e. /sub>
			.replace(/\/(?![a-z])/g,'<span class=bigger>&divide;</span>')
			// replace period when followed by a number, i.e. .5
			.replace(/\.(?=\d)/g,'<span class=decimalNoPadding>.</span>') 
			: input;
    };
});
    