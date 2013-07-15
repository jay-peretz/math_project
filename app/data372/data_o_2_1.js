/*global angular */

angular.module('mathSkills').value('data_o_2_1', {
    title: 'O.2.1 Multiply with the Same Base',
    path: 'O.2.1-multiply-with-the-same-base',
    children: [{
        title: 'Multiply with the Same Base',
        children: [] }]
});

angular.module('mathSkills').service('data_o_2_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'O.2.1 Multiply with the Same Base',
            path: 'O.2.1-multiply-with-the-same-base',
            children: []
        },
        template = {
			main: {
                title: 'Multiply with the Same Base',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{}}}{\\row{\\exp{\\str{$base1}}{\\str{$exp1}}}{\\sign{&times;}}{\\exp{\\str{$base2}}{\\str{$exp2}}}}',
						answer: '\\exp{\\input{$baseans}}{\\input{$expans}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{\\str{$base1}}{\\str{$exp1}}}{\\sign{&times;}}{\\exp{\\str{$base2}}{\\str{$exp2}}}{\\sign{=}}}' +
							'{\\row{\\exp{\\str{$base1}}{\\str{$expequation}}}{\\sign{=}}}' +
							'{\\row{\\str{Ans:}}{\\exp{\\str{$baseans}}{\\str{$expans}}}}'
						}
					}]
                }]
            }
		},
		data = [
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '3',
		 exp1: '-5',
		 base2: '3',
		 exp2: '2',
		 baseans: '3',
		 expans: '-3',
		 expequation: '-5 + 2',
		 template: 'main' }
		];
		
		return dataUtils.build(desc, template, data);
}]);
