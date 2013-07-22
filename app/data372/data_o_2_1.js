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
			two: {
                title: 'Multiply with the Same Base',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{}}}{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}}',
						answer: '\\exp{$baseans}{$expans}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\exp{$base1}{$expequation}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\str{Ans: \xA0}}{\\exp{$basehelp}{$exphelp}}}'
						}
					}]
                }]
            },
			three: {
                title: 'Multiply with the Same Base',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{\xA0}}}{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}}',
						answer: '\\exp{\\input{$baseans}}{\\input{$expans}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\exp{$base1}{$expequation}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\str{Ans: \xA0}}{\\exp{\\str{$baseans}}{\\str{$expans}}}}'
						}
					}]
                }]
            }
		},
		data = [
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{3}',
		 exp1: '\\\\str{-5}',
		 base2: '\\\\str{3}',
		 exp2: '\\\\str{3}',
		 baseans: '\\\\input{3}',
		 expans: '\\\\input{2}',
		 basehelp: '\\\\str{3}',
		 exphelp: '\\\\str{2}',
		 expequation: '\\\\str{-5 + 3}',
		 template: 'two' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{-5}',
		 exp1: '\\\\str{-3}',
		 base2: '\\\\str{-5}',
		 exp2: '\\\\str{-3}',
		 base3: '\\\\str{-5}',
		 exp3: '\\\\str{-5}',
		 baseans: '-5',
		 expans: '-11',
		 expequation: '\\\\str{-3 + (-3) + (-5)}',
		 template: 'three' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\frac{\\\\str{3}}{\\\\str{5}}',
		 exp1: '\\\\str{-5}',
		 base2: '\\\\frac{\\\\str{3}}{\\\\str{5}}',
		 exp2: '\\\\str{3}',
		 baseans: '\\\\frac{\\\\input{3}}{\\\\input{5}}',
		 expans: '\\\\input{2}',
		 basehelp: '\\\\frac{\\\\str{3}}{\\\\str{5}}',
		 exphelp: '\\\\str{2}',
		 expequation: '\\\\str{-5 + 3}',
		 template: 'two' }
		];
		
		return dataUtils.build(desc, template, data);
}]);
