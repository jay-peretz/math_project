/*global angular */

angular.module('mathSkills').filter('enlargeOps', function () {
    return function (input) {
        return typeof input === 'string' ?
            input.replace(/[\*\/]/g, function (char) {
                switch (char) {
                    case '*': return '<span class=bigger>&bull;</span>';
					case 'x': return '\xB7';
                    case '/': return '÷';
					case '+': return '\x2B';
					case '-': return '\x2D';
                }
            }) :
            input;
    };
});
    