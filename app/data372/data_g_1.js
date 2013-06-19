/*global angular */

angular.module('mathSkills').service('data_g_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'G.1 Addition of Like Fractions',
            path: 'G.1-addition-of-like-fraction',
            children: []
        },
        template = {
            main: { 
        title: 'Add and Subtract Like Fractions',
        children: [{
            title: 'Main Answer',
            children: [{
                problem: '\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{+}}{\\frac{\\str{$n2}}{\\str{$d2}}',
                answer: '\\grp{\\sign{=}}{\\frac{\\input{$na}}{\\input{$da}}}',
                controls: {
                    "checkAnswer": true,
                    "help": '\\row{\\frac{\\str{$n1}}{\\str{$d1}}}{\\sign{+}}{\\frac{\\str{$n2}}{\\str{$d2}}}{\\sign{=}}{\\frac{\\str{$na}}{\\str{$da}}}'
                }
            }]
        }]
    }},
        data = [
            { n1: 6, d1: 9, n2: 2, d2: 9, na: 8, da: 9, template: 'main' },
            { n1: 3, d1: 11, n2: 1, d2: 11, na: 4, da: 11, template: 'main' },
	        { n1: 1, d1: 5, n2: 1, d2: 5, na: 2, da: 5, template: 'main' },
		    { n1: 1, d1: 13, n2: 3, d2: 13, na: 4, da: 13, template: 'main' },
		    { n1: 1, d1: 11, n2: 5, d2: 11, na: 6, da: 11, template: 'main' },
    		{ n1: 3, d1: 15, n2: 7, d2: 15, na: 8, da: 15, template: 'main' },
			{ n1: 1, d1: 7, n2: 2, d2: 7, na: 3, da: 7, template: 'main' },
			{ n1: 1, d1: 5, n2: 2, d2: 5, na: 3, da: 5, template: 'main' },
		    { n1: 6, d1: 25, n2: 13, d2: 25, na: 19, da: 25, template: 'main' },
			{ n1: 1, d1: 9, n2: 2, d2: 9, na: 3, da: 9, template: 'main' }
        ];

    return dataUtils.build(desc, template, data);
}]);
