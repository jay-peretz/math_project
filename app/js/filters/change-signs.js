/*global angular */

angular.module('mathSkills').filter('changeSigns', function () {
    return function (input) {
        return typeof input === 'string' ?
            input.replace(/[\*\/]/g, function (char) {
                switch (char) {
                    case '*': return '\xB7';
					case 'x': return '\xB7';
                    case '/': return '÷';
                }
            }) :
            input;
    };
});
