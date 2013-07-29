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
					problem: '\\rowgrp{\\row{\\str{$instructions}}}{\\row{\\str{\xA0}}}{\\row{\\exp{$base1}{$exp1}}{\\sign{&times;}}{\\exp{$base2}{$exp2}}{\\sign{&times;}}{\\exp{$base3}{$exp3}}{\\sign{&times;}}{\\exp{$base4}{$exp4}}}',
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
		 base1: '\\\\str{(-5)}',
		 exp1: '\\\\str{-3}',
		 base2: '\\\\str{(-5)}',
		 exp2: '\\\\str{-3}',
		 base3: '\\\\str{(-5)}',
		 exp3: '\\\\str{-5}',
		 baseans: '\\\\grp{\\\\str{(}}{\\\\input{-5}}{\\\\str{)}}',
		 expans: '\\\\input{-11}',
		 helpbase:'\\\\str{(-5)}' ,
		 helpexp: '\\\\str{-11}',
		 expequation: '\\\\str{-3 + (-3) + (-5)}',
		 template: 'three' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{5}}}{\\\\str{)}}',
		 exp1: '\\\\str{-5}',
		 base2: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{5}}}{\\\\str{)}}',
		 exp2: '\\\\str{3}',
		 baseans: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\input{3}}{\\\\input{5}}}{\\\\str{)}}',
		 expans: '\\\\input{-2}',
		 basehelp: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{5}}}{\\\\str{)}}',
		 exphelp: '\\\\str{-2}',
		 expequation: '\\\\str{-5 + 3}',
		 template: 'two' },
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{4}}}{\\\\str{)}}',
		 exp1: '\\\\str{2}',
		 base2: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{4}}}{\\\\str{)}}',
		 exp2: '\\\\str{-4}',
		 base3: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{4}}}{\\\\str{)}}',
		 exp3: '\\\\str{ }',
		 baseans: '\\\\grp{\\\\str{(}}{\\\\frac{\\\\input{3}}{\\\\input{4}}}{\\\\str{)}}',
		 expans: '\\\\input{-1}',
		 helpbase:'\\\\grp{\\\\str{(}}{\\\\frac{\\\\str{3}}{\\\\str{4}}}{\\\\str{)}}' ,
		 helpexp: '\\\\str{-1}',
		 expequation: '\\\\str{2 + (-4) + (1)}',
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
		 template: 'threediff' },{instructions: 'Determine the simplified result of multiplying the following exponential values',
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
		 base1: '\\\\str{(-2)}',
		 exp1: '\\\\str{-2}',
		 base2: '\\\\str{(-2)}',
		 exp2: '\\\\str{2}',
		 base3: '\\\\str{(-5)}',
		 exp3: '\\\\str{-3}',
		 base4: '\\\\str{(-5)}',
		 exp4: '\\\\str{4}',		 
		 baseans1: '\\\\grp{\\\\str{(}}{\\\\input{-2}}{\\\\str{)}}',
		 expans1: '\\\\input{4}',
		 baseans2: '\\\\grp{\\\\str{(}}{\\\\input{-5}}{\\\\str{)}}',
		 expans2: '\\\\input{[1]}',
		 helpbase1:'\\\\str{-2}' ,
		 helpexp1: '\\\\str{0}',
		 helpbase2:'\\\\str{-5}' ,
		 helpexp2: '',
		 expequation1: '\\\\str{(-2)+ 2}',
		 expequation2: '\\\\str{(-3) + 4}',
		 template: 'fourdiff' },
		 {instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{11}',
		 exp1: '\\\\str{6}',
		 base2: '\\\\str{11}',
		 exp2: '\\\\str{-2}',
		 baseans: '\\\\input{11}',
		 expans: '\\\\input{4}',
		 basehelp: '\\\\str{11}',
		 exphelp: '\\\\str{4}',
		 expequation: '\\\\str{6 + (-2)}',
		 template: 'two' }	,
		{instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{(-2)}',
		 exp1: '\\\\str{6}',
		 base2: '\\\\str{(-2)}',
		 exp2: '\\\\str{-2}',
		 base3: '\\\\str{(-2)}',
		 exp3: '\\\\str{3}',
		 baseans: '\\\\grp{\\\\str{(}}{\\\\input{-2}}{\\\\str{)}}',
		 expans: '\\\\input{7}',
		 helpbase:'\\\\str{(-2)}' ,
		 helpexp: '\\\\str{7}',
		 expequation: '\\\\str{6 + (-2) + 3}',
		 template: 'three' },
		 {instructions: 'Determine the simplified result of multiplying the following exponential values',
		 base1: '\\\\str{(-5)}',
		 exp1: '\\\\str{-3}',
		 base2: '\\\\str{(-5)}',
		 exp2: '\\\\str{5}',
		 base3: '\\\\str{(-7)}',
		 exp3: '\\\\str{3}',
		 base4: '\\\\str{(-7)}',
		 exp4: '\\\\str{-2}',		 
		 baseans1: '\\\\grp{\\\\str{(}}{\\\\input{-5}}{\\\\str{)}}',
		 expans1: '\\\\input{2}',
		 baseans2: '\\\\grp{\\\\str{(}}{\\\\input{-7}}{\\\\str{)}}',
		 expans2: '\\\\input{[1]}',
		 helpbase1:'\\\\str{-5}' ,
		 helpexp1: '\\\\str{2}',
		 helpbase2:'\\\\str{-7}' ,
		 helpexp2: '',
		 expequation1: '\\\\str{(-3)+ 5}',
		 expequation2: '\\\\str{3 + (-2)}',
		 template: 'fourdiff' }	
		];
		
		return dataUtils.build(desc, template, data);
}]);
