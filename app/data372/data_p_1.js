/*global angular */

angular.module('mathSkills').service('data_p_1', ['dataUtils', function (dataUtils) {
    var desc = {
            title: 'P.1 Simplifying Exponential Expressions: the Zero and Negative Exponents',
            path: 'p.1-the-zero-and-negative-exponents',
            children: []
        },
        template = {
			firstSimplify: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '$solutionAnswer',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line1}}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$helpAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			secondSimplify: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
				children: [{
					title: 'Main Answer',
					children: [{
						problem: '$problemStatement',
						answer: '$solutionAnswer',		
						controls: {
                            "checkAnswer": true,
                            "help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\str{$line2}}'
										+'{\\html{&nbsp;}}'
										+'{$line3}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$helpAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
						}
					}]
                }]
            },
			evaluateAfterSimplify: {
                title: 'Simplifying Exponential Expressions: the Zero and Negative Exponents',
				children: [{
					title: 'Main Answer',
					children: [{
								problem: '$problemStatement',
								answer: '$solutionAnswer',		
								controls: {
									"checkAnswer": true,
									"help": '\\rowgrp'
										+'{\\html{&nbsp;}}'
										+'{$line1}'
										+'{\\html{&nbsp;}}'
										+'{\\css'
											+'{\\grp'
												+'{\\str{$helpAnswer}}'
											+'}'
											+'{help-answer-text}'
										+'}'
										+'{\\html{&nbsp;}}'
								}
						}
						,
						{
						problem: '$problemStatement',
						answer: '$wellProblemStatement',	
						controls: {
                            "checkAnswer": true,
                            "help": '$secondHelpAnswer'					
						}
					}]
                }]
            }
		},
		data = [
			// prob 1
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base1: '4',
				exp1: '0',
				baseans: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: 'Any non-zero base raised to the power of zero is equal to 1 whole.',
				helpAnswer: '<br>Simplified Answer: &nbsp;1',
				template: 'firstSimplify' 
			 }
		  	,
		  	// prob 2
			{
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
									+'}'
							),
				answerInstructions: '',
				base1: '7',
				exp1: '0',
				baseans: '1',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\input{$$baseans}}'
									+'}'
							),
				line1: 'Any non-zero base raised to the power of zero is equal to 1 whole.',
				helpAnswer: '<br>Simplified Answer: &nbsp;1',
				template: 'firstSimplify' 
			 }
			  ,
			  	// prob 3
				{
					problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'}'
								),
					answerInstructions: '',
					base1: '(-3 )',
					exp1: '0',
					baseans: '1',
					solutionAnswer: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\grp'
											+'{\\input{$$baseans}}'
										+'}'
								),
					line1: 'Any non-zero base raised to the power of zero is equal to 1 whole.',
					helpAnswer: '<br>Simplified Answer: &nbsp;1',
					template: 'firstSimplify' 
				 }
			  ,
			  	// prob 4
				{
					problemStatement: dataUtils.pre(
									'\\rowgrp'
										+'{\\grp'
											+'{\\str{Simplify: &nbsp;}}'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
										+'}'
								),
					answerInstructions: '',
					base1: '(-5 )',
					exp1: '0',
					baseans: '1',
					solutionAnswer: dataUtils.pre(
									'\\rowgrp'
										+'{\\str{$$answerInstructions}}'
										+'{\\grp'
											+'{\\input{$$baseans}}'
										+'}'
								),
					line1: 'Any non-zero base raised to the power of zero is equal to 1 whole.',
					helpAnswer: '<br>Simplified Answer: &nbsp;1',
					template: 'firstSimplify' 
				 }
			  ,
			 // prob 5
			 {
				problemStatement: dataUtils.pre(
								'\\rowgrp'
									+'{\\grp'
										+'{\\str{Simplify: &nbsp;}}'
										+'{\\frac'
											+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
											+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
										+'}'
									+'}'
							),
				wellProblemStatement: dataUtils.pre(
									'\\css'
										+'{\\rowgrp'
											+'{\\html{&nbsp;}}'
											+'{\\grp'
												+'{\\frac'
													+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
													+'{\\exp{\\str{&nbsp;$$base2}}{\\str{$$exp2}}}'
												+'}'
												+'{\\str{=}}'
												+'{\\exp{\\str{$$baseans}}{\\str{$$expans}}}'
											+'}'
											+'{\\html{&nbsp;}}'
											+'{\\css'
												+'{\\grp'
													+'{\\str{Evaluate the simplified expression<span class=large>:</span>}}'
												+'}'
												+'{alert alert-info}'
											+'}'
											+'{\\grp'
												+'{\\input{$finalAnswer}}'
											+'}'
										+'}{well}'
							),
				answerInstructions: '',
				base1: '6',
				exp1: '3',
				base2: '6',
				exp2: '3',
				baseans: '6',
				expans: '0',
				solutionAnswer: dataUtils.pre(
								'\\rowgrp'
									+'{\\str{$$answerInstructions}}'
									+'{\\grp'
										+'{\\exp{\\input{$$baseans}}{\\input{$$expans}}'
									+'}'
							),
				line1: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{'
											+'This problem has \"Division of Same Bases\". '
											+'Therefore, we <u>subtract the exponents</u>.'
										+'}}'
										+'{\\str{&nbsp;}}'
										+'{\\grp'
											+'{\\frac'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp1}}}'
												+'{\\exp{\\str{&nbsp;$$base1}}{\\str{$$exp2}}}'
											+'}'
											+'{\\str{'
												+'&nbsp; means &nbsp; $$base1 <sup>$$exp1 - $$exp2</sup> &nbsp; or &nbsp; $$base1 <sup>$$expans</sup>'
											+'}}'
							),
				helpAnswer: '<br>Simplified Answer: &nbsp;$$baseans<sup>$$expans</sup>',
				secondHelp: dataUtils.pre(
									 '\\rowgrp'
										+'{\\str{&nbsp;}}'
										+'{\\str{'
												+'Any non-zero base raised to the power of zero is equal to 1 whole.'
										+'}}'
									),
				secondHelpAnswer: '<br>Evaluated Answer: &nbsp;1',
				finalAnswer: '1',
				template: 'evaluateAfterSimplify' 
			 }
		];
		
		/*shuffle = [
				{ problems: [1,2], total: 1},
				{ problems: [3,4], total: 1},
				{ problems: [5,6], total: 1},
				{ problems: [7,8], total: 1},
				{ problems: [9,10], total: 1},
				{ problems: [11,12], total: 1},
				{ problems: [13,14], total: 1},
				{ problems: [15,16], total: 1},
				{ problems: [17,18], total: 1},
				{ problems: [19,20], total: 1},
				{ problems: [21,22], total: 1},
				{ problems: [23,24], total: 1}
		];*/
		return dataUtils.build(desc, template, data);
    
    	//return dataUtils.build(desc, template, data, shuffle);
}]);
