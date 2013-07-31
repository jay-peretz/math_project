/*global angular */

angular.module('mathSkills').filter('changeSigns', function () {
    return function (input) {
        return typeof input === 'string' ?
            input.replace(/[\*\/]/g, function (char) {
                switch (char) {
                    case '*': return '⚈';
					case 'x': return '⚈';
                    case '/': return '÷';
                }
            }) :
            input;
    };
});
