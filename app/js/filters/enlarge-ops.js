/*global angular */

angular.module('mathSkills').filter('enlargeOps', function () {
    return function (input) {
        return typeof input === 'string' ?
            input.replace(/[\*\/\+\-\x]/g, function (char) {
                switch (char) {
                    case '*': return '<span class=bigger>&bull;</span>';
					case 'x': return '<span class=bigger>&bull;</span>';
                    case '/': return '<span class=bigger>&divide;</span>';
					case '+': return '<span class=bigger>&#43;</span>';
					case '-': return '<span class=bigger>&#45;</span>';
                }
            }) :
            input;
    };
});
    