 /*global angular */

angular.module('mathSkills').filter('enlargeOps', function () {
    return function (input) {
        return typeof input === 'string' ?
            input .replace(/[\*\+\-]/g, function (char) {
                switch (char) {
                    case '*': return '&nbsp;<span>&bull;</span>&nbsp;';
					case '+': return '&nbsp;<span class=large>&#43;</span>&nbsp;';
					case '-': return '<span class=bigger>&#45;</span>';
                }
            })
			// replace = if preceded and followed by blanks- avoids replacing ="class">
			.replace(' = ',' <span class=bigger>=</span> ')
			// replace forward slash if not followed by a letter, i.e. /sub>
			.replace(/\/(?![a-z])/g,'<span class=bigger>&divide;</span>')
			// replace period when followed by a number, i.e. .5
			.replace(/\.(?=\d)/g,'<span class=decimalNoPadding>.</span>') 
			// replace left paren if that's the only element in the string
			.replace(/\(/, function (whole) {
				if (input === "(" && whole === "(") {
					return '<span class=hugeAndThin>(</span>';
				} else {
					return whole;
				}
			})
			// replace right paren if that's the only element in the string
			.replace(/\)/, function (whole) {
				if (input === ")" && whole === ")") {
					return '<span class=hugeAndThin>)</span>';
				} else {
					return whole;
				}
			})
			// replace left bracket if that's the only element in the string
			// not actually in use owing to multiple answer logic in ms.string.js
			.replace(/\[/, function (whole) {
				if (input === "[" && whole === "[") {
					return '<span class=hugeAndThin>[</span>';
				} else {
					return whole;
				}
			})
			// replace right bracket if that's the only element in the string
			.replace(/\]/, function (whole) {
				if (input === "]" && whole === "]") {
					return '<span class=hugeAndThin>]</span>';
				} else {
					return whole;
				}
			})
			: input;
    };
});
    