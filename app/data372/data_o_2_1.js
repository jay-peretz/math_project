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
							'{\\css{\\row{\\str{Ans: \xA0}}{\\exp{$basehelp}{$exphelp}}}{help-answer-text}}'
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
						answer: '\\exp{$baseans}{$expans}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\exp{$base1}{$expequation}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\css{\\row{\\str{Ans: \xA0}}{\\exp{$helpbase}{$helpexp}}}{help-answer-text}}'
						}
					}]
                }]
            },
			threediff: {
                title: 'Multiply with the Same Base',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{\xA0}}}{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}}',
						answer: '\\grp{\\exp{$baseans1}{$expans1}}{\\sign{&times;}}{\\exp{$baseans2}{$expans2}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\exp{$base1}{$expequation1}}{\\sign{&times;}}{\\exp{$base3}{$expequation2}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\css{\\row{\\str{Ans: \xA0}}{\\exp{$helpbase1}{$helpexp1}}{\\sign{&times;}}{\\exp{$helpbase2}{$helpexp2}}}{help-answer-text}}'
						}
					}]
                }]
            },
			fourdiff: {
                title: 'Multiply with the Same Base',
				children: [{
					title: 'Main Answer',
					children: [{
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{\xA0}}}{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}}',
						answer: '\\grp{\\exp{$baseans1}{$expans1}}{\\sign{&times;}}{\\exp{$baseans2}{$expans2}}',		
						controls: {
							"checkAnswer": true,
							"help": '\\rowgrp' +
							'{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\row{\\exp{$base1}{$expequation1}}{\\sign{&times;}}{\\exp{$base3}{$expequation2}}{\\sign{=}}}' +
							'{\\row{\\str{\xA0}}}' +
							'{\\css{\\row{\\str{Ans: \xA0}}{\\exp{$helpbase1}{$helpexp1}}{\\sign{&times;}}{\\exp{$helpbase2}{$helpexp2}}}{help-answer-text}}'
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
		 baseans: '\\\\input{-5}',
		 expans: '\\\\input{-11}',
		 helpbase:'\\\\str{-5}' ,
		 helpexp: '\\\\str{-11}',
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
		 template: 'two' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\frac{\\\\str{3}}{\\\\str{4}}',
		 exp1: '\\\\str{2}',
		 base2: '\\\\frac{\\\\str{3}}{\\\\str{4}}',
		 exp2: '\\\\str{-4}',
		 base3: '\\\\frac{\\\\str{3}}{\\\\str{4}}',
		 exp3: '\\\\str{ }',
		 baseans: '\\\\frac{\\\\input{3}}{\\\\input{4}}',
		 expans: '\\\\input{-1}',
		 helpbase:'\\\\frac{\\\\str{3}}{\\\\str{4}}' ,
		 helpexp: '\\\\str{-1}',
		 expequation: '\\\\str{2 + (-4) + (0)}',
		 template: 'three' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{2}',
		 exp1: '\\\\str{-1}',
		 base2: '\\\\str{2}',
		 exp2: '\\\\str{3}',
		 base3: '\\\\str{3}',
		 exp3: '\\\\str{-1}',
		 baseans1: '\\\\input{2}',
		 expans1: '\\\\input{2}',
		 baseans2: '\\\\input{3}',
		 expans2: '\\\\input{-1}',
		 helpbase1:'\\\\str{2}' ,
		 helpexp1: '\\\\str{2}',
		 helpbase2:'\\\\str{3}' ,
		 helpexp2: '\\\\str{-1}',
		 expequation1: '\\\\str{-1 + (+3)}',
		 expequation2: '\\\\str{3}',
		 template: 'threediff' },
		 {instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{2}',
		 exp1: '\\\\str{4}',
		 base2: '\\\\str{5}',
		 exp2: '\\\\str{5}',
		 base3: '\\\\str{5}',
		 exp3: '\\\\str{-2}',
		 baseans1: '\\\\input{2}',
		 expans1: '\\\\input{4}',
		 baseans2: '\\\\input{5}',
		 expans2: '\\\\input{3}',
		 helpbase1:'\\\\str{2}' ,
		 helpexp1: '\\\\str{4}',
		 helpbase2:'\\\\str{5}' ,
		 helpexp2: '\\\\str{3}',
		 expequation1: '\\\\str{4}',
		 expequation2: '\\\\str{(5 + (-2))}',
		 template: 'threediff' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{2}',
		 exp1: '\\\\str{4}',
		 base2: '\\\\str{5}',
		 exp2: '\\\\str{5}',
		 base3: '\\\\str{5}',
		 exp3: '\\\\str{-2}',
		 baseans1: '\\\\input{2}',
		 expans1: '\\\\input{4}',
		 baseans2: '\\\\input{5}',
		 expans2: '\\\\input{3}',
		 helpbase1:'\\\\str{2}' ,
		 helpexp1: '\\\\str{4}',
		 helpbase2:'\\\\str{5}' ,
		 helpexp2: '\\\\str{3}',
		 expequation1: '\\\\str{4}',
		 expequation2: '\\\\str{(5 + (-2))}',
		 template: 'fourdiff' }
		];
		
		return dataUtils.build(desc, template, data);
}]);
